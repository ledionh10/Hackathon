// Enhanced Market Data with more symbols and features
const marketData = {
    AAPL: {
        name: 'Apple Inc.',
        price: 178.85,
        change: 2.34,
        volume: '45.2M',
        marketCap: '2.8T',
        pe: 28.5,
        sector: 'Technology',
        data: []
    },
    GOOGL: {
        name: 'Alphabet Inc.',
        price: 2847.63,
        change: -1.23,
        volume: '28.7M',
        marketCap: '1.7T',
        pe: 25.2,
        sector: 'Technology',
        data: []
    },
    MSFT: {
        name: 'Microsoft Corp.',
        price: 338.54,
        change: 1.87,
        volume: '32.1M',
        marketCap: '2.5T',
        pe: 32.1,
        sector: 'Technology',
        data: []
    },
    TSLA: {
        name: 'Tesla Inc.',
        price: 248.42,
        change: -3.45,
        volume: '67.8M',
        marketCap: '789B',
        pe: 65.4,
        sector: 'Automotive',
        data: []
    },
    AMZN: {
        name: 'Amazon.com Inc.',
        price: 3342.88,
        change: 0.92,
        volume: '41.3M',
        marketCap: '1.4T',
        pe: 58.7,
        sector: 'E-commerce',
        data: []
    },
    NVDA: {
        name: 'NVIDIA Corp.',
        price: 875.28,
        change: 4.56,
        volume: '52.3M',
        marketCap: '2.2T',
        pe: 71.2,
        sector: 'Technology',
        data: []
    },
    META: {
        name: 'Meta Platforms',
        price: 487.23,
        change: 2.18,
        volume: '38.9M',
        marketCap: '1.2T',
        pe: 24.8,
        sector: 'Technology',
        data: []
    },
    NFLX: {
        name: 'Netflix Inc.',
        price: 612.45,
        change: -0.87,
        volume: '15.6M',
        marketCap: '272B',
        pe: 42.3,
        sector: 'Entertainment',
        data: []
    }
};

// Portfolio data
let portfolioData = {
    totalValue: 125430.50,
    dayChange: 1234.56,
    totalGain: 18430.50,
    cash: 12569.75,
    holdings: [
        { symbol: 'AAPL', shares: 100, avgCost: 165.50, currentPrice: 178.85 },
        { symbol: 'MSFT', shares: 50, avgCost: 315.20, currentPrice: 338.54 },
        { symbol: 'GOOGL', shares: 10, avgCost: 2650.00, currentPrice: 2847.63 },
        { symbol: 'TSLA', shares: 25, avgCost: 275.80, currentPrice: 248.42 },
        { symbol: 'NVDA', shares: 15, avgCost: 720.30, currentPrice: 875.28 }
    ]
};

// Alerts data
let alertsData = [
    { id: 1, symbol: 'AAPL', type: 'above', value: 180, status: 'active', created: new Date() },
    { id: 2, symbol: 'TSLA', type: 'below', value: 240, status: 'active', created: new Date() },
    { id: 3, symbol: 'MSFT', type: 'change', value: 5, status: 'triggered', created: new Date() }
];

// Notifications data
let notifications = [
    { id: 1, title: 'Price Alert Triggered', message: 'AAPL reached $180.00', time: '5 minutes ago', read: false },
    { id: 2, title: 'Market Update', message: 'S&P 500 up 1.2% today', time: '1 hour ago', read: false },
    { id: 3, title: 'Earnings Report', message: 'MSFT reports Q4 earnings', time: '2 hours ago', read: true }
];

// Application state
let currentSection = 'dashboard';
let currentSymbol = 'AAPL';
let currentTimeframe = '1w';
let currentTheme = 'dark';
let charts = {};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    showLoadingScreen();
    setTimeout(() => {
        hideLoadingScreen();
        initializeApp();
    }, 3000);
});

function showLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.style.display = 'flex';
}

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 500);
}

function initializeApp() {
    console.log('Market Analyzer Pro initialized');
    
    // Initialize data
    Object.keys(marketData).forEach(symbol => {
        generatePriceData(symbol);
    });
    
    // Initialize charts
    initializeCharts();
    
    // Initialize UI components
    initializeNavigation();
    initializeWatchlist();
    initializeMarketMovers();
    initializeEconomicCalendar();
    initializeNewsFeeds();
    initializeHeatmap();
    initializePortfolio();
    initializeScreener();
    initializeAlerts();
    initializeAnalysis();
    initializeNotifications();
    
    // Initialize event listeners
    initializeEventListeners();
    
    // Start real-time updates
    startRealTimeUpdates();
    
    // Update initial display
    updateChart(currentSymbol);
    updateMarketOverview();
}

// Generate sample price data
function generatePriceData(symbol, days = 30) {
    const data = [];
    const basePrice = marketData[symbol].price;
    let currentPrice = basePrice * (0.9 + Math.random() * 0.2); // Start with some variation
    
    for (let i = 0; i < days; i++) {
        const change = (Math.random() - 0.5) * 0.05; // ±2.5% daily change
        currentPrice *= (1 + change);
        data.push({
            x: new Date(Date.now() - (days - i) * 24 * 60 * 60 * 1000),
            y: currentPrice,
            volume: Math.floor(Math.random() * 100000000) + 10000000
        });
    }
    
    marketData[symbol].data = data;
    marketData[symbol].price = currentPrice; // Update current price
}

// Initialize charts
function initializeCharts() {
    // Main price chart
    const ctx = document.getElementById('priceChart').getContext('2d');
    charts.priceChart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Price',
                data: [],
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 0,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: '#3b82f6',
                pointHoverBorderColor: '#ffffff',
                pointHoverBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'rgba(37, 43, 61, 0.95)',
                    titleColor: '#ffffff',
                    bodyColor: '#a0a9c0',
                    borderColor: '#3b82f6',
                    borderWidth: 1,
                    cornerRadius: 8,
                    displayColors: false,
                    callbacks: {
                        label: function(context) {
                            return `Price: $${context.parsed.y.toFixed(2)}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    type: 'time',
                    time: { unit: 'day' },
                    grid: { color: 'rgba(107, 114, 128, 0.1)', drawBorder: false },
                    ticks: { color: '#6b7280' }
                },
                y: {
                    beginAtZero: false,
                    grid: { color: 'rgba(107, 114, 128, 0.1)', drawBorder: false },
                    ticks: {
                        color: '#6b7280',
                        callback: function(value) {
                            return '$' + value.toFixed(2);
                        }
                    }
                }
            },
            interaction: { intersect: false, mode: 'index' }
        }
    });

    // Portfolio chart
    const portfolioCtx = document.getElementById('portfolioChart');
    if (portfolioCtx) {
        charts.portfolioChart = new Chart(portfolioCtx.getContext('2d'), {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'Portfolio Value',
                    data: [],
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    x: { grid: { color: 'rgba(107, 114, 128, 0.1)' } },
                    y: {
                        grid: { color: 'rgba(107, 114, 128, 0.1)' },
                        ticks: {
                            callback: function(value) {
                                return '$' + (value / 1000).toFixed(0) + 'K';
                            }
                        }
                    }
                }
            }
        });
    }
}

// Navigation functionality
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.dataset.section;
            if (section) {
                switchSection(section);
                
                // Update active nav link
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });
}

function switchSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionName);
    if (targetSection) {
        targetSection.classList.add('active');
        currentSection = sectionName;
        
        // Initialize section-specific functionality
        if (sectionName === 'portfolio') {
            updatePortfolioDisplay();
        } else if (sectionName === 'screener') {
            updateScreenerResults();
        } else if (sectionName === 'alerts') {
            updateAlertsDisplay();
        } else if (sectionName === 'analysis') {
            updateAnalysisDisplay();
        }
    }
}

// Theme toggle functionality
function initializeEventListeners() {
    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Notification panel
    const notificationBtn = document.getElementById('notificationBtn');
    if (notificationBtn) {
        notificationBtn.addEventListener('click', toggleNotificationPanel);
    }
    
    // Symbol selector
    const symbolSelect = document.getElementById('symbolSelect');
    if (symbolSelect) {
        symbolSelect.addEventListener('change', (e) => {
            currentSymbol = e.target.value;
            updateChart(currentSymbol);
        });
    }
    
    // Timeframe buttons
    document.querySelectorAll('.btn').forEach(btn => {
        if (btn.id && btn.id.startsWith('btn')) {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                
                const period = e.target.id;
                let days;
                switch(period) {
                    case 'btn1d': days = 1; break;
                    case 'btn1w': days = 7; break;
                    case 'btn1m': days = 30; break;
                    case 'btn3m': days = 90; break;
                    case 'btn1y': days = 365; break;
                    case 'btn5y': days = 1825; break;
                    default: days = 30;
                }
                
                currentTimeframe = period.replace('btn', '');
                generatePriceData(currentSymbol, days);
                updateChart(currentSymbol);
            });
        }
    });
    
    // Chart tools
    document.querySelectorAll('.btn-tool').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.btn-tool').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            const chartType = e.target.dataset.chart;
            updateChartType(chartType);
        });
    });
    
    // Indicator toggles
    document.querySelectorAll('.btn-indicator').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.target.classList.toggle('active');
            const indicator = e.target.dataset.indicator;
            toggleIndicator(indicator);
        });
    });
    
    // Market movers tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            const tab = e.target.dataset.tab;
            updateMarketMovers(tab);
        });
    });
    
    // News filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            const filter = e.target.dataset.filter;
            updateNewsFilter(filter);
        });
    });
    
    // Alert modal
    const createAlertBtn = document.getElementById('createAlert');
    if (createAlertBtn) {
        createAlertBtn.addEventListener('click', openAlertModal);
    }
    
    const alertModal = document.getElementById('alertModal');
    if (alertModal) {
        const closeBtn = alertModal.querySelector('.modal-close');
        const cancelBtn = document.getElementById('cancelAlert');
        const saveBtn = document.getElementById('saveAlert');
        
        if (closeBtn) closeBtn.addEventListener('click', closeAlertModal);
        if (cancelBtn) cancelBtn.addEventListener('click', closeAlertModal);
        if (saveBtn) saveBtn.addEventListener('click', saveAlert);
    }
    
    // Close modal when clicking outside
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeAlertModal();
        }
    });
    
    // Refresh buttons
    const refreshMarket = document.getElementById('refreshMarket');
    if (refreshMarket) {
        refreshMarket.addEventListener('click', () => {
            updateMarketOverview();
            showToast('Market data refreshed', 'success');
        });
    }
}

function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    const themeIcon = document.querySelector('#themeToggle i');
    if (themeIcon) {
        themeIcon.className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
    
    showToast(`Switched to ${currentTheme} theme`, 'info');
}

function toggleNotificationPanel() {
    const panel = document.getElementById('notificationPanel');
    if (panel) {
        panel.classList.toggle('active');
    }
}

// Chart functionality
function updateChart(symbol) {
    const data = marketData[symbol];
    if (!data || !charts.priceChart) return;
    
    charts.priceChart.data.datasets[0].data = data.data;
    charts.priceChart.data.datasets[0].label = data.name;
    charts.priceChart.update('active');
    
    // Update chart info
    updateChartInfo(symbol);
    updateTechnicalIndicators(symbol);
}

function updateChartInfo(symbol) {
    const data = marketData[symbol];
    if (!data) return;
    
    const currentPrice = document.getElementById('currentPrice');
    const priceChange = document.getElementById('priceChange');
    const volumeValue = document.getElementById('volumeValue');
    
    if (currentPrice) currentPrice.textContent = `$${data.price.toFixed(2)}`;
    if (priceChange) {
        const changeAmount = data.price * (data.change / 100);
        priceChange.textContent = `${data.change > 0 ? '+' : ''}$${changeAmount.toFixed(2)} (${data.change.toFixed(2)}%)`;
        priceChange.className = `price-change ${data.change > 0 ? 'positive' : 'negative'}`;
    }
    if (volumeValue) volumeValue.textContent = data.volume;
}

function updateChartType(type) {
    if (!charts.priceChart) return;
    
    switch (type) {
        case 'line':
            charts.priceChart.config.type = 'line';
            break;
        case 'candlestick':
            // Implement candlestick chart
            showToast('Candlestick chart coming soon!', 'info');
            break;
        case 'volume':
            // Implement volume chart
            showToast('Volume chart coming soon!', 'info');
            break;
    }
    
    charts.priceChart.update();
}

function toggleIndicator(indicator) {
    // Implement technical indicator overlays
    showToast(`${indicator.toUpperCase()} indicator toggled`, 'info');
}

// Technical indicators
function updateTechnicalIndicators(symbol) {
    const data = marketData[symbol];
    if (!data) return;
    
    // Simulate technical indicators
    const rsi = 30 + Math.random() * 40; // RSI between 30-70
    const macd = (Math.random() - 0.5) * 5; // MACD
    const sma20 = data.price * (0.98 + Math.random() * 0.04);
    const sma50 = data.price * (0.96 + Math.random() * 0.04);
    
    // Update RSI
    const rsiElement = document.getElementById('rsi');
    if (rsiElement) {
        rsiElement.textContent = rsi.toFixed(1);
        rsiElement.className = `indicator-value ${rsi > 70 ? 'negative' : rsi < 30 ? 'positive' : ''}`;
        
        // Update RSI bar
        const rsiFill = document.querySelector('.rsi-fill');
        if (rsiFill) {
            rsiFill.style.width = `${rsi}%`;
        }
    }
    
    // Update MACD
    const macdElement = document.getElementById('macd');
    if (macdElement) {
        macdElement.textContent = macd.toFixed(2);
        macdElement.className = `indicator-value ${macd > 0 ? 'positive' : 'negative'}`;
    }
    
    // Update other indicators
    const sma20Element = document.getElementById('sma20');
    const sma50Element = document.getElementById('sma50');
    const volumeElement = document.getElementById('volume');
    const changeElement = document.getElementById('change');
    
    if (sma20Element) sma20Element.textContent = sma20.toFixed(2);
    if (sma50Element) sma50Element.textContent = sma50.toFixed(2);
    if (volumeElement) volumeElement.textContent = data.volume;
    if (changeElement) {
        changeElement.textContent = `${data.change > 0 ? '+' : ''}${data.change.toFixed(2)}%`;
        changeElement.className = `indicator-value ${data.change > 0 ? 'positive' : 'negative'}`;
    }
}

// Market overview
function updateMarketOverview() {
    const indices = [
        { id: 'sp500', changeId: 'sp500-change', miniId: 'sp500-mini' },
        { id: 'nasdaq', changeId: 'nasdaq-change', miniId: 'nasdaq-mini' },
        { id: 'dow', changeId: 'dow-change', miniId: 'dow-mini' },
        { id: 'vix', changeId: 'vix-change' }
    ];
    
    indices.forEach(index => {
        const element = document.getElementById(index.id);
        const changeElement = document.getElementById(index.changeId);
        const miniElement = document.getElementById(index.miniId);
        
        if (element) {
            const currentValue = parseFloat(element.textContent.replace(',', ''));
            const change = (Math.random() - 0.5) * 0.004; // Small random change
            const newValue = currentValue * (1 + change);
            const percentChange = change * 100;
            
            element.textContent = newValue.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
            
            if (miniElement) {
                miniElement.textContent = newValue.toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                });
            }
            
            if (changeElement) {
                changeElement.textContent = `${percentChange > 0 ? '+' : ''}${percentChange.toFixed(2)}%`;
                changeElement.className = `stat-change ${percentChange > 0 ? 'positive' : percentChange < 0 ? 'negative' : 'neutral'}`;
            }
        }
    });
}

// Watchlist functionality
function initializeWatchlist() {
    updateWatchlistDisplay();
}

function updateWatchlistDisplay() {
    const container = document.getElementById('watchlistContainer');
    if (!container) return;
    
    const watchlistSymbols = ['AAPL', 'MSFT', 'GOOGL', 'TSLA', 'NVDA'];
    
    container.innerHTML = watchlistSymbols.map(symbol => {
        const data = marketData[symbol];
        if (!data) return '';
        
        return `
            <div class="watchlist-item" data-symbol="${symbol}">
                <div>
                    <div class="watchlist-symbol">${symbol}</div>
                    <div class="watchlist-name">${data.name}</div>
                </div>
                <div class="watchlist-price">
                    <div class="watchlist-value ${data.change > 0 ? 'positive' : 'negative'}">$${data.price.toFixed(2)}</div>
                    <div class="watchlist-change ${data.change > 0 ? 'positive' : 'negative'}">${data.change > 0 ? '+' : ''}${data.change.toFixed(2)}%</div>
                </div>
            </div>
        `;
    }).join('');
    
    // Add click handlers
    container.querySelectorAll('.watchlist-item').forEach(item => {
        item.addEventListener('click', () => {
            const symbol = item.dataset.symbol;
            currentSymbol = symbol;
            document.getElementById('symbolSelect').value = symbol;
            updateChart(symbol);
        });
    });
}

// Market movers
function initializeMarketMovers() {
    updateMarketMovers('gainers');
}

function updateMarketMovers(type) {
    const container = document.getElementById('moversContainer');
    if (!container) return;
    
    let symbols = Object.keys(marketData);
    
    // Sort based on type
    switch (type) {
        case 'gainers':
            symbols.sort((a, b) => marketData[b].change - marketData[a].change);
            break;
        case 'losers':
            symbols.sort((a, b) => marketData[a].change - marketData[b].change);
            break;
        case 'volume':
            symbols.sort((a, b) => parseFloat(marketData[b].volume) - parseFloat(marketData[a].volume));
            break;
    }
    
    container.innerHTML = symbols.slice(0, 5).map(symbol => {
        const data = marketData[symbol];
        return `
            <div class="mover-item">
                <div class="mover-info">
                    <div class="mover-symbol">${symbol}</div>
                    <div class="mover-name">${data.name}</div>
                </div>
                <div class="mover-stats">
                    <div class="mover-price ${data.change > 0 ? 'positive' : 'negative'}">$${data.price.toFixed(2)}</div>
                    <div class="mover-change ${data.change > 0 ? 'positive' : 'negative'}">${data.change > 0 ? '+' : ''}${data.change.toFixed(2)}%</div>
                </div>
            </div>
        `;
    }).join('');
}

// Economic calendar
function initializeEconomicCalendar() {
    const container = document.getElementById('calendarContainer');
    if (!container) return;
    
    const events = [
        { time: '9:30', title: 'Market Open', impact: 'high' },
        { time: '10:00', title: 'Consumer Price Index', impact: 'high' },
        { time: '14:00', title: 'Fed Interest Rate Decision', impact: 'high' },
        { time: '15:30', title: 'Crude Oil Inventories', impact: 'medium' },
        { time: '16:00', title: 'Market Close', impact: 'low' }
    ];
    
    container.innerHTML = events.map(event => `
        <div class="calendar-event">
            <div class="event-time">${event.time}</div>
            <div class="event-title">${event.title}</div>
            <div class="event-impact ${event.impact}">${event.impact}</div>
        </div>
    `).join('');
}

// News feeds
function initializeNewsFeeds() {
    updateNewsDisplay();
}

function updateNewsDisplay() {
    const container = document.getElementById('newsFeed');
    if (!container) return;
    
    const newsItems = [
        { title: 'Tech Stocks Rally on Strong Earnings Reports', category: 'Technology', time: '2 hours ago' },
        { title: 'Federal Reserve Maintains Interest Rates', category: 'Economy', time: '4 hours ago' },
        { title: 'Oil Prices Surge Amid Supply Concerns', category: 'Energy', time: '6 hours ago' },
        { title: 'Cryptocurrency Market Shows Mixed Signals', category: 'Crypto', time: '8 hours ago' },
        { title: 'Global Markets React to Economic Data', category: 'Global', time: '10 hours ago' }
    ];
    
    container.innerHTML = newsItems.map(item => `
        <div class="news-item">
            <div class="news-title">${item.title}</div>
            <div class="news-meta">
                <div class="news-time">${item.time}</div>
                <div class="news-category">${item.category}</div>
            </div>
        </div>
    `).join('');
}

function updateNewsFilter(filter) {
    // Implement news filtering
    showToast(`Showing ${filter} news`, 'info');
}

// Heatmap
function initializeHeatmap() {
    updateHeatmapDisplay();
}

function updateHeatmapDisplay() {
    const container = document.getElementById('heatmapContainer');
    if (!container) return;
    
    const symbols = Object.keys(marketData);
    
    container.innerHTML = symbols.map(symbol => {
        const data = marketData[symbol];
        const changeClass = data.change > 0 ? 'positive' : data.change < 0 ? 'negative' : 'neutral';
        
        return `
            <div class="heatmap-item ${changeClass}" data-symbol="${symbol}">
                <div class="heatmap-symbol">${symbol}</div>
                <div class="heatmap-change ${changeClass}">${data.change > 0 ? '+' : ''}${data.change.toFixed(2)}%</div>
            </div>
        `;
    }).join('');
    
    // Add click handlers
    container.querySelectorAll('.heatmap-item').forEach(item => {
        item.addEventListener('click', () => {
            const symbol = item.dataset.symbol;
            currentSymbol = symbol;
            document.getElementById('symbolSelect').value = symbol;
            updateChart(symbol);
        });
    });
}

// Portfolio functionality
function initializePortfolio() {
    updatePortfolioDisplay();
}

function updatePortfolioDisplay() {
    updatePortfolioStats();
    updateHoldingsTable();
    updatePortfolioChart();
}

function updatePortfolioStats() {
    // Portfolio stats are already in HTML, could be dynamic
}

function updateHoldingsTable() {
    const tbody = document.querySelector('#holdingsTable tbody');
    if (!tbody) return;
    
    tbody.innerHTML = portfolioData.holdings.map(holding => {
        const currentData = marketData[holding.symbol];
        if (!currentData) return '';
        
        const marketValue = holding.shares * currentData.price;
        const totalCost = holding.shares * holding.avgCost;
        const gainLoss = marketValue - totalCost;
        const gainLossPercent = (gainLoss / totalCost) * 100;
        
        return `
            <tr>
                <td><strong>${holding.symbol}</strong></td>
                <td>${holding.shares}</td>
                <td>$${holding.avgCost.toFixed(2)}</td>
                <td>$${currentData.price.toFixed(2)}</td>
                <td>$${marketValue.toFixed(2)}</td>
                <td class="${gainLoss > 0 ? 'positive' : 'negative'}">$${gainLoss.toFixed(2)}</td>
                <td class="${gainLoss > 0 ? 'positive' : 'negative'}">${gainLossPercent.toFixed(2)}%</td>
                <td>
                    <button class="btn-small">Buy</button>
                    <button class="btn-small">Sell</button>
                </td>
            </tr>
        `;
    }).join('');
}

function updatePortfolioChart() {
    if (!charts.portfolioChart) return;
    
    // Generate sample portfolio performance data
    const days = 30;
    const data = [];
    const labels = [];
    let value = portfolioData.totalValue * 0.9;
    
    for (let i = 0; i < days; i++) {
        const change = (Math.random() - 0.5) * 0.02;
        value *= (1 + change);
        data.push(value);
        labels.push(new Date(Date.now() - (days - i) * 24 * 60 * 60 * 1000).toLocaleDateString());
    }
    
    charts.portfolioChart.data.labels = labels;
    charts.portfolioChart.data.datasets[0].data = data;
    charts.portfolioChart.update();
}

// Screener functionality
function initializeScreener() {
    updateScreenerResults();
}

function updateScreenerResults() {
    const tbody = document.querySelector('#screenerResults tbody');
    if (!tbody) return;
    
    const symbols = Object.keys(marketData);
    
    tbody.innerHTML = symbols.map(symbol => {
        const data = marketData[symbol];
        return `
            <tr>
                <td><strong>${symbol}</strong></td>
                <td>${data.name}</td>
                <td>$${data.price.toFixed(2)}</td>
                <td class="${data.change > 0 ? 'positive' : 'negative'}">${data.change.toFixed(2)}%</td>
                <td>${data.volume}</td>
                <td>${data.marketCap}</td>
                <td>${data.pe}</td>
                <td>
                    <button class="btn-small">Add to Watchlist</button>
                </td>
            </tr>
        `;
    }).join('');
}

// Alerts functionality
function initializeAlerts() {
    updateAlertsDisplay();
}

function updateAlertsDisplay() {
    updateActiveAlerts();
    updateAlertHistory();
}

function updateActiveAlerts() {
    const container = document.getElementById('alertsList');
    if (!container) return;
    
    const activeAlerts = alertsData.filter(alert => alert.status === 'active');
    
    container.innerHTML = activeAlerts.map(alert => `
        <div class="alert-item">
            <div class="alert-header">
                <div class="alert-symbol">${alert.symbol}</div>
                <div class="alert-status ${alert.status}">${alert.status}</div>
            </div>
            <div class="alert-details">
                ${alert.type === 'above' ? 'Price above' : alert.type === 'below' ? 'Price below' : 'Change'} $${alert.value}
            </div>
        </div>
    `).join('');
}

function updateAlertHistory() {
    const container = document.getElementById('alertHistory');
    if (!container) return;
    
    const triggeredAlerts = alertsData.filter(alert => alert.status === 'triggered');
    
    container.innerHTML = triggeredAlerts.map(alert => `
        <div class="alert-item">
            <div class="alert-header">
                <div class="alert-symbol">${alert.symbol}</div>
                <div class="alert-status ${alert.status}">${alert.status}</div>
            </div>
            <div class="alert-details">
                ${alert.type === 'above' ? 'Price above' : alert.type === 'below' ? 'Price below' : 'Change'} $${alert.value}
            </div>
        </div>
    `).join('');
}

function openAlertModal() {
    const modal = document.getElementById('alertModal');
    if (modal) {
        modal.classList.add('active');
    }
}

function closeAlertModal() {
    const modal = document.getElementById('alertModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

function saveAlert() {
    const form = document.getElementById('alertForm');
    if (!form) return;
    
    const formData = new FormData(form);
    const alert = {
        id: Date.now(),
        symbol: document.getElementById('alertSymbol').value,
        type: document.getElementById('alertType').value,
        value: parseFloat(document.getElementById('alertValue').value),
        status: 'active',
        created: new Date()
    };
    
    alertsData.push(alert);}
