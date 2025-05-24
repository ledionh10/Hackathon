// Enhanced Market Data with real-time simulation
const marketData = {
    AAPL: {
        name: 'Apple Inc.',
        price: 178.85,
        change: 2.34,
        changePercent: 1.33,
        volume: '45.2M',
        marketCap: '2.8T',
        pe: 28.5,
        sector: 'Technology',
        high: 180.45,
        low: 176.23,
        data: [],
        indicators: {
            rsi: 65.4,
            macd: -1.23,
            sma20: 176.45,
            sma50: 174.23,
            ema: 177.89,
            bollinger: { upper: 182.5, lower: 172.3 }
        }
    },
    GOOGL: {
        name: 'Alphabet Inc.',
        price: 2847.63,
        change: -1.23,
        changePercent: -0.04,
        volume: '28.7M',
        marketCap: '1.7T',
        pe: 25.2,
        sector: 'Technology',
        high: 2865.45,
        low: 2834.12,
        data: [],
        indicators: {
            rsi: 58.2,
            macd: 0.45,
            sma20: 2856.78,
            sma50: 2823.45,
            ema: 2851.23,
            bollinger: { upper: 2890.5, lower: 2810.3 }
        }
    },
    MSFT: {
        name: 'Microsoft Corp.',
        price: 338.54,
        change: 1.87,
        changePercent: 0.56,
        volume: '32.1M',
        marketCap: '2.5T',
        pe: 32.1,
        sector: 'Technology',
        high: 342.78,
        low: 335.23,
        data: [],
        indicators: {
            rsi: 62.8,
            macd: 0.78,
            sma20: 335.67,
            sma50: 331.45,
            ema: 337.89,
            bollinger: { upper: 345.5, lower: 325.3 }
        }
    },
    TSLA: {
        name: 'Tesla Inc.',
        price: 248.42,
        change: -3.45,
        changePercent: -1.37,
        volume: '67.8M',
        marketCap: '789B',
        pe: 65.4,
        sector: 'Automotive',
        high: 254.67,
        low: 246.89,
        data: [],
        indicators: {
            rsi: 45.6,
            macd: -2.34,
            sma20: 252.34,
            sma50: 258.67,
            ema: 250.12,
            bollinger: { upper: 265.5, lower: 235.3 }
        }
    },
    AMZN: {
        name: 'Amazon.com Inc.',
        price: 3342.88,
        change: 0.92,
        changePercent: 0.03,
        volume: '41.3M',
        marketCap: '1.4T',
        pe: 58.7,
        sector: 'E-commerce',
        high: 3356.78,
        low: 3328.45,
        data: [],
        indicators: {
            rsi: 52.3,
            macd: 0.12,
            sma20: 3345.67,
            sma50: 3334.23,
            ema: 3341.45,
            bollinger: { upper: 3375.5, lower: 3315.3 }
        }
    },
    NVDA: {
        name: 'NVIDIA Corp.',
        price: 875.28,
        change: 4.56,
        changePercent: 0.52,
        volume: '52.3M',
        marketCap: '2.2T',
        pe: 71.2,
        sector: 'Technology',
        high: 882.45,
        low: 867.23,
        data: [],
        indicators: {
            rsi: 68.9,
            macd: 1.45,
            sma20: 872.34,
            sma50: 865.78,
            ema: 874.56,
            bollinger: { upper: 895.5, lower: 855.3 }
        }
    },
    META: {
        name: 'Meta Platforms',
        price: 487.23,
        change: 2.18,
        changePercent: 0.45,
        volume: '38.9M',
        marketCap: '1.2T',
        pe: 24.8,
        sector: 'Technology',
        high: 492.67,
        low: 483.45,
        data: [],
        indicators: {
            rsi: 61.7,
            macd: 0.89,
            sma20: 485.67,
            sma50: 478.23,
            ema: 486.78,
            bollinger: { upper: 505.5, lower: 465.3 }
        }
    },
    NFLX: {
        name: 'Netflix Inc.',
        price: 612.45,
        change: -0.87,
        changePercent: -0.14,
        volume: '15.6M',
        marketCap: '272B',
        pe: 42.3,
        sector: 'Entertainment',
        high: 618.23,
        low: 608.67,
        data: [],
        indicators: {
            rsi: 48.3,
            macd: -0.34,
            sma20: 615.78,
            sma50: 621.45,
            ema: 613.23,
            bollinger: { upper: 635.5, lower: 595.3 }
        }
    }
};

// Index data
const indexData = {
    SPY: { name: 'S&P 500', price: 4567.89, change: 56.78, changePercent: 1.26 },
    QQQ: { name: 'NASDAQ', price: 14234.56, change: 123.45, changePercent: 0.87 },
    DIA: { name: 'Dow Jones', price: 34567.12, change: -156.78, changePercent: -0.45 },
    VIX: { name: 'VIX', price: 18.45, change: 0.23, changePercent: 1.26 }
};

// Portfolio data
let portfolioData = {
    totalValue: 125430.50,
    dayChange: 1234.56,
    totalGain: 18430.50,
    cash: 12569.75,
    holdings: [
        { symbol: 'AAPL', shares: 100, avgCost: 165.50, currentPrice: 178.85, date: '2024-01-15' },
        { symbol: 'MSFT', shares: 50, avgCost: 315.20, currentPrice: 338.54, date: '2024-02-10' },
        { symbol: 'GOOGL', shares: 10, avgCost: 2650.00, currentPrice: 2847.63, date: '2024-01-20' },
        { symbol: 'TSLA', shares: 25, avgCost: 275.80, currentPrice: 248.42, date: '2024-03-05' },
        { symbol: 'NVDA', shares: 15, avgCost: 720.30, currentPrice: 875.28, date: '2024-02-28' }
    ]
};

// Alerts data
let alertsData = [
    { id: 1, symbol: 'AAPL', type: 'above', value: 180, status: 'active', created: new Date('2024-01-15'), email: true, push: true },
    { id: 2, symbol: 'TSLA', type: 'below', value: 240, status: 'active', created: new Date('2024-01-20'), email: true, push: false },
    { id: 3, symbol: 'MSFT', type: 'change', value: 5, status: 'triggered', created: new Date('2024-01-10'), email: false, push: true }
];

// Notifications data
let notifications = [
    { id: 1, title: 'Price Alert Triggered', message: 'AAPL reached $180.00', time: '5 minutes ago', read: false, type: 'alert' },
    { id: 2, title: 'Market Update', message: 'S&P 500 up 1.2% today', time: '1 hour ago', read: false, type: 'market' },
    { id: 3, title: 'Earnings Report', message: 'MSFT reports Q4 earnings', time: '2 hours ago', read: true, type: 'earnings' }
];

// News data
const newsData = [
    { title: 'Apple Reports Strong Q4 Earnings', category: 'earnings', time: '2 hours ago', type: 'breaking' },
    { title: 'Fed Signals Potential Rate Cut', category: 'market', time: '4 hours ago', type: 'analysis' },
    { title: 'Tesla Announces New Model', category: 'automotive', time: '6 hours ago', type: 'breaking' },
    { title: 'Tech Stocks Rally on AI News', category: 'technology', time: '8 hours ago', type: 'analysis' },
    { title: 'Oil Prices Surge on Supply Concerns', category: 'energy', time: '10 hours ago', type: 'breaking' }
];

// Economic calendar data
const economicEvents = [
    { time: '8:30', title: 'Non-Farm Payrolls', impact: 'high' },
    { time: '10:00', title: 'Consumer Confidence', impact: 'medium' },
    { time: '14:00', title: 'Fed Speech', impact: 'high' },
    { time: '16:00', title: 'Oil Inventory', impact: 'low' }
];

// Watchlist data
let watchlistData = ['AAPL', 'MSFT', 'GOOGL', 'TSLA', 'NVDA', 'META'];

// Application state
let currentSection = 'dashboard';
let currentSymbol = 'AAPL';
let currentTimeframe = '1w';
let currentTheme = 'dark';
let charts = {};
let isMobile = false;
let isTablet = false;
let updateInterval;
let chartType = 'line';
let activeIndicators = [];

// Device detection
function detectDevice() {
    const width = window.innerWidth;
    isMobile = width < 768;
    isTablet = width >= 768 && width < 1024;

    document.body.classList.toggle('mobile', isMobile);
    document.body.classList.toggle('tablet', isTablet);
    document.body.classList.toggle('desktop', !isMobile && !isTablet);
}

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    detectDevice();
    showLoadingScreen();
    
    // Simulate loading process
    const loadingSteps = [
        'Initializing application...',
        'Loading market data...',
        'Setting up charts...',
        'Connecting to data feeds...',
        'Ready!'
    ];
    
    let stepIndex = 0;
    const loadingInterval = setInterval(() => {
        if (stepIndex < loadingSteps.length) {
            document.getElementById('loadingStatus').textContent = loadingSteps[stepIndex];
            stepIndex++;
        } else {
            clearInterval(loadingInterval);
            setTimeout(() => {
                hideLoadingScreen();
                initializeApp();
            }, 500);
        }
    }, 600);
});

// Handle window resize
window.addEventListener('resize', debounce(() => {
    detectDevice();
    handleResponsiveChanges();
}, 250));

function handleResponsiveChanges() {
    if (charts.priceChart) {
        charts.priceChart.resize();
    }
    if (charts.portfolioChart) {
        charts.portfolioChart.resize();
    }

    if (!isMobile) {
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenu) {
            mobileMenu.classList.remove('active');
        }
    }

    adjustNotificationPanel();
}

function adjustNotificationPanel() {
    const panel = document.getElementById('notificationPanel');
    if (panel && isMobile) {
        panel.style.width = 'calc(100vw - 32px)';
        panel.style.right = '16px';
    } else if (panel) {
        panel.style.width = '350px';
        panel.style.right = '24px';
    }
}

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
    
    // Generate historical data for all symbols
    generateHistoricalData();
    
    // Initialize all components
    initializeNavigation();
    initializeTheme();
    initializeCharts();
    initializeMarketData();
    initializeWatchlist();
    initializePortfolio();
    initializeAlerts();
    initializeScreener();
    initializeAnalysis();
    initializeNotifications();
    initializeModals();
    initializeRealTimeUpdates();
    
    // Show initial section
    showSection('dashboard');
    
    // Start real-time updates
    startRealTimeUpdates();
    
    showToast('Welcome!', 'Market Analyzer Pro is ready', 'success');
}

// Navigation functionality
function initializeNavigation() {
    // Desktop navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.dataset.section;
            if (section) {
                showSection(section);
                updateActiveNavLink(link);
                
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobileMenu');
                if (mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                }
            }
        });
    });

    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        const icon = mobileMenuToggle.querySelector('i');
        icon.className = mobileMenu.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.classList.remove('active');
            const icon = mobileMenuToggle.querySelector('i');
            icon.className = 'fas fa-bars';
        }
    });
}

function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionName);
    if (targetSection) {
        targetSection.classList.add('active');
        currentSection = sectionName;
        
        // Update page title
        document.title = `Market Analyzer Pro - ${sectionName.charAt(0).toUpperCase() + sectionName.slice(1)}`;
        
        // Trigger section-specific initialization
        switch (sectionName) {
            case 'portfolio':
                updatePortfolioDisplay();
                break;
            case 'screener':
                updateScreenerResults();
                break;
            case 'alerts':
                updateAlertsDisplay();
                break;
            case 'analysis':
                updateAnalysisDisplay();
                break;
        }
    }
}

function updateActiveNavLink(activeLink) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Update both desktop and mobile nav links
    const section = activeLink.dataset.section;
    document.querySelectorAll(`[data-section="${section}"]`).forEach(link => {
        link.classList.add('active');
    });
}

// Theme functionality
function initializeTheme() {
    const themeToggle = document.querySelectorAll('.theme-toggle');
    
    themeToggle.forEach(toggle => {
        toggle.addEventListener('click', () => {
            toggleTheme();
        });
    });
    
    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
}

function toggleTheme() {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

function setTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Update theme toggle icons
    document.querySelectorAll('.theme-toggle i').forEach(icon => {
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    });
}

// Chart functionality
function initializeCharts() {
    initializePriceChart();
    initializePortfolioChart();
    
    // Chart controls
    document.querySelectorAll('[data-chart]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('[data-chart]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            chartType = btn.dataset.chart;
            updatePriceChart();
        });
    });
    
    // Timeframe buttons
    document.querySelectorAll('[data-timeframe]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('[data-timeframe]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentTimeframe = btn.dataset.timeframe;
            updatePriceChart();
        });
    });
    
    // Symbol selector
    const symbolSelect = document.getElementById('symbolSelect');
    symbolSelect.addEventListener('change', () => {
        currentSymbol = symbolSelect.value;
        updatePriceChart();
        updateCurrentPriceDisplay();
        updateIndicators();
    });
    
    // Indicator toggles
    document.querySelectorAll('[data-indicator]').forEach(btn => {
        btn.addEventListener('click', () => {
            const indicator = btn.dataset.indicator;
            if (activeIndicators.includes(indicator)) {
                activeIndicators = activeIndicators.filter(i => i !== indicator);
                btn.classList.remove('active');
            } else {
                activeIndicators.push(indicator);
                btn.classList.add('active');
            }
            updatePriceChart();
        });
    });
}

function initializePriceChart() {
    const ctx = document.getElementById('priceChart').getContext('2d');
    
    charts.priceChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Price',
                data: [],
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#a0a9c0'
                    }
                },
                y: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#a0a9c0'
                    }
                }
            },
            interaction: {
                intersect: false,
                mode: 'index'
            }
        }
    });
    
    updatePriceChart();
}

function initializePortfolioChart() {
    const ctx = document.getElementById('portfolioChart').getContext('2d');
    
    charts.portfolioChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Portfolio Value',
                data: [],
                borderColor: '#10b981',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#a0a9c0'
                    }
                },
                y: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#a0a9c0',
                        callback: function(value) {
                            return '$' + value.toLocaleString();
                        }
                    }
                }
            }
        }
    });
    
    updatePortfolioChart();
}

function updatePriceChart() {
    const symbol = marketData[currentSymbol];
    if (!symbol || !charts.priceChart) return;
    
    const chart = charts.priceChart;
    chart.data.labels = symbol.data.map(d => d.date);
    chart.data.datasets[0].data = symbol.data.map(d => d.price);
    chart.data.datasets[0].label = `${currentSymbol} Price`;
    
    // Add indicator datasets
    chart.data.datasets = chart.data.datasets.slice(0, 1); // Keep only price dataset
    
    activeIndicators.forEach(indicator => {
        switch (indicator) {
            case 'sma':
                chart.data.datasets.push({
                    label: 'SMA(20)',
                    data: symbol.data.map(d => d.sma20),
                    borderColor: '#f59e0b',
                    backgroundColor: 'transparent',
                    borderWidth: 1,
                    fill: false,
                    tension: 0.4
                });
                break;
            case 'ema':
                chart.data.datasets.push({
                    label: 'EMA(20)',
                    data: symbol.data.map(d => d.ema),
                    borderColor: '#8b5cf6',
                    backgroundColor: 'transparent',
                    borderWidth: 1,
                    fill: false,
                    tension: 0.4
                });
                break;
        }
    });
    
    chart.update();
}

function updatePortfolioChart() {
    if (!charts.portfolioChart) return;
    
    // Generate portfolio performance data
    const portfolioHistory = generatePortfolioHistory();
    
    const chart = charts.portfolioChart;
    chart.data.labels = portfolioHistory.map(d => d.date);
    chart.data.datasets[0].data = portfolioHistory.map(d => d.value);
    
    chart.update();
}

// Market data functionality
function initializeMarketData() {
    updateMarketStatus();
    updateMarketOverview();
    updateHeatmap();
    updateMarketMovers();
    updateEconomicCalendar();
    updateNewsDisplay();
    
    // Market refresh button
    document.getElementById('refreshMarket').addEventListener('click', () => {
        refreshMarketData();
    });
    
    // Heatmap filters
    document.getElementById('sectorFilter').addEventListener('change', updateHeatmap);
    document.getElementById('timeframeFilter').addEventListener('change', updateHeatmap);
    
    // News filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            updateNewsDisplay(filter);
        });
    });
    
    // Market movers tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const tab = btn.dataset.tab;
            updateMarketMovers(tab);
        });
    });
}

function updateMarketStatus() {
    const now = new Date();
    const marketOpen = new Date();
    marketOpen.setHours(9, 30, 0, 0);
    const marketClose = new Date();
    marketClose.setHours(16, 0, 0, 0);
    
    const isMarketOpen = now >= marketOpen && now <= marketClose && now.getDay() >= 1 && now.getDay() <= 5;
    
    const statusDot = document.getElementById('marketStatusDot');
    const statusText = document.getElementById('marketStatusText');
    const statusTime = document.getElementById('marketStatusTime');
    
    if (isMarketOpen) {
        statusDot.style.background = '#10b981';
        statusText.textContent = 'Market Open';
        statusTime.textContent = now.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit',
            timeZoneName: 'short'
        });
    } else {
        statusDot.style.background = '#ef4444';
        statusText.textContent = 'Market Closed';
        statusTime.textContent = 'Next: 9:30 AM EST';
    }
}

function updateMarketOverview() {
    Object.keys(indexData).forEach(symbol => {
        const data = indexData[symbol];
        const valueElement = document.getElementById(symbol.toLowerCase());
        const changeElement = document.getElementById(`${symbol.toLowerCase()}-change`);
        const miniValueElement = document.getElementById(`${symbol.toLowerCase()}-mini`);
        const miniChangeElement = document.getElementById(`${symbol.toLowerCase()}-change-mini`);
        
        if (valueElement) valueElement.textContent = data.price.toLocaleString();
        if (miniValueElement) miniValueElement.textContent = data.price.toLocaleString();
        
        const changeText = `${data.change >= 0 ? '+' : ''}${data.change.toFixed(2)} (${data.changePercent >= 0 ? '+' : ''}${data.changePercent.toFixed(2)}%)`;
        const changeClass = data.change >= 0 ? 'positive' : 'negative';
        
        if (changeElement) {
            changeElement.textContent = changeText;
            changeElement.className = `stat-change ${changeClass}`;
        }
        
        if (miniChangeElement) {
            miniChangeElement.textContent = `${data.changePercent >= 0 ? '+' : ''}${data.changePercent.toFixed(2)}%`;
            miniChangeElement.className = `index-change ${changeClass}`;
        }
    });
}

function updateCurrentPriceDisplay() {
    const symbol = marketData[currentSymbol];
    if (!symbol) return;
    
    document.getElementById('currentPrice').textContent = `$${symbol.price.toFixed(2)}`;
    document.getElementById('priceChange').textContent = `${symbol.change >= 0 ? '+' : ''}$${symbol.change.toFixed(2)} (${symbol.changePercent >= 0 ? '+' : ''}${symbol.changePercent.toFixed(2)}%)`;
    document.getElementById('priceChange').className = `price-change ${symbol.change >= 0 ? 'positive' : 'negative'}`;
    document.getElementById('volumeValue').textContent = symbol.volume;
}

function updateIndicators() {
    const symbol = marketData[currentSymbol];
    if (!symbol) return;
    
    const indicatorsGrid = document.getElementById('indicatorsGrid');
    indicatorsGrid.innerHTML = '';
    
    const indicators = [
        {
            name: 'RSI (14)',
            value: symbol.indicators.rsi,
            signal: symbol.indicators.rsi > 70 ? 'bearish' : symbol.indicators.rsi < 30 ? 'bullish' : 'neutral',
            details: ['Overbought: >70', 'Oversold: <30'],
            hasChart: true
        },
        {
            name: 'MACD',
            value: symbol.indicators.macd,
            signal: symbol.indicators.macd > 0 ? 'bullish' : 'bearish',
            details: ['Signal: -0.89', 'Histogram: -0.34']
        },
        {
            name: 'SMA (20)',
            value: symbol.indicators.sma20,
            signal: symbol.price > symbol.indicators.sma20 ? 'bullish' : 'bearish',
            details: ['Above SMA: Bullish', 'Below SMA: Bearish']
        },
        {
            name: 'SMA (50)',
            value: symbol.indicators.sma50,
            signal: symbol.price > symbol.indicators.sma50 ? 'bullish' : 'bearish',
            details: ['Trend: Upward', `Support: $${(symbol.indicators.sma50 * 0.98).toFixed(2)}`]
        },
        {
            name: 'Volume',
            value: symbol.volume,
            signal: 'neutral',
            details: ['Avg Volume: 52.1M', 'Relative: -13.2%']
        },
        {
            name: 'Change',
            value: `${symbol.changePercent >= 0 ? '+' : ''}${symbol.changePercent.toFixed(2)}%`,
            signal: symbol.changePercent > 0 ? 'bullish' : 'bearish',
            details: [`Day High: $${symbol.high}`, `Day Low: $${symbol.low}`]
        }
    ];
    
    indicators.forEach(indicator => {
        const indicatorCard = document.createElement('div');
        indicatorCard.className = 'indicator-card';
        
        indicatorCard.innerHTML = `
            <div class="indicator-header">
                <div class="indicator-name">${indicator.name}</div>
                <div class="indicator-signal ${indicator.signal}">${indicator.signal.charAt(0).toUpperCase() + indicator.signal.slice(1)}</div>
            </div>
            <div class="indicator-value ${indicator.signal === 'bullish' ? 'positive' : indicator.signal === 'bearish' ? 'negative' : ''}">${typeof indicator.value === 'number' ? indicator.value.toFixed(2) : indicator.value}</div>
            <div class="indicator-details">
                ${indicator.details.map(detail => `<div>${detail}</div>`).join('')}
            </div>
            ${indicator.hasChart ? `
                <div class="indicator-chart">
                    <div class="rsi-bar">
                        <div class="rsi-fill" style="width: ${indicator.value}%"></div>
                        <div class="rsi-line oversold"></div>
                        <div class="rsi-line overbought"></div>
                    </div>
                </div>
            ` : ''}
        `;
        
        indicatorsGrid.appendChild(indicatorCard);
    });
}

function updateHeatmap() {
    const sectorFilter = document.getElementById('sectorFilter').value;
    const timeframeFilter = document.getElementById('timeframeFilter').value;
    const container = document.getElementById('heatmapContainer');
    
    container.innerHTML = '';
    
    const symbols = Object.keys(marketData).filter(symbol => {
        if (sectorFilter === 'all') return true;
        return marketData[symbol].sector.toLowerCase() === sectorFilter;
    });
    
    symbols.forEach(symbol => {
        const data = marketData[symbol];
        const item = document.createElement('div');
        item.className = `heatmap-item ${data.change >= 0 ? 'positive' : 'negative'}`;
        item.dataset.symbol = symbol;
        
        item.innerHTML = `
            <div class="heatmap-symbol">${symbol}</div>
            <div class="heatmap-change">${data.changePercent >= 0 ? '+' : ''}${data.changePercent.toFixed(2)}%</div>
        `;
        
        item.addEventListener('click', () => {
            currentSymbol = symbol;
            document.getElementById('symbolSelect').value = symbol;
            updatePriceChart();
            updateCurrentPriceDisplay();
            updateIndicators();
            showToast('Symbol Selected', `Now viewing ${symbol}`, 'info');
        });
        
        container.appendChild(item);
    });
}

function updateMarketMovers(tab = 'gainers') {
    const container = document.getElementById('moversContainer');
    container.innerHTML = '';
    
    let sortedSymbols = Object.keys(marketData).sort((a, b) => {
        switch (tab) {
            case 'gainers':
                return marketData[b].changePercent - marketData[a].changePercent;
            case 'losers':
                return marketData[a].changePercent - marketData[b].changePercent;
            case 'volume':
                return parseFloat(marketData[b].volume) - parseFloat(marketData[a].volume);
            default:
                return 0;
        }
    }).slice(0, 5);
    
    sortedSymbols.forEach(symbol => {
        const data = marketData[symbol];
        const item = document.createElement('div');
        item.className = 'mover-item';
        
        item.innerHTML = `
            <div class="mover-info">
                <div class="mover-symbol">${symbol}</div>
                <div class="mover-name">${data.name}</div>
            </div>
            <div class="mover-stats">
                <div class="mover-price">$${data.price.toFixed(2)}</div>
                <div class="mover-change ${data.change >= 0 ? 'positive' : 'negative'}">${data.changePercent >= 0 ? '+' : ''}${data.changePercent.toFixed(2)}%</div>
            </div>
        `;
        
        item.addEventListener('click', () => {
            currentSymbol = symbol;
            document.getElementById('symbolSelect').value = symbol;
            updatePriceChart();
            updateCurrentPriceDisplay();
            updateIndicators();
            showToast('Symbol Selected', `Now viewing ${symbol}`, 'info');
        });
        
        container.appendChild(item);
    });
}

function updateEconomicCalendar() {
    const container = document.getElementById('calendarContainer');
    container.innerHTML = '';
    
    economicEvents.forEach(event => {
        const item = document.createElement('div');
        item.className = 'calendar-event';
        
        item.innerHTML = `
            <div class="event-time">${event.time}</div>
            <div class="event-title">${event.title}</div>
            <div class="event-impact ${event.impact}">${event.impact}</div>
        `;
        
        container.appendChild(item);
    });
}

function updateNewsDisplay(filter = 'all') {
    const container = document.getElementById('newsFeed');
    container.innerHTML = '';
    
    const filteredNews = newsData.filter(news => {
        if (filter === 'all') return true;
        return news.type === filter;
    });
    
    filteredNews.forEach(news => {
        const item = document.createElement('div');
        item.className = 'news-item';
        
        item.innerHTML = `
            <div class="news-title">${news.title}</div>
            <div class="news-meta">
                <div class="news-time">${news.time}</div>
                <div class="news-category">${news.category}</div>
            </div>
        `;
        
        item.addEventListener('click', () => {
            showToast('News', 'Opening article...', 'info');
        });
        
        container.appendChild(item);
    });
}

// Watchlist functionality
function initializeWatchlist() {
    updateWatchlistDisplay();
    
    // Search functionality
    const searchInput = document.getElementById('watchlistSearch');
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        filterWatchlist(query);
    });
    
    // Add to watchlist button
    document.getElementById('addToWatchlist').addEventListener('click', () => {
        showAddToWatchlistModal();
    });
}

function updateWatchlistDisplay() {
    const container = document.getElementById('watchlistContainer');
    container.innerHTML = '';
    
    watchlistData.forEach(symbol => {
        const data = marketData[symbol];
        if (!data) return;
        
        const item = document.createElement('div');
        item.className = 'watchlist-item';
        item.dataset.symbol = symbol;
        
        item.innerHTML = `
            <div>
                <div class="watchlist-symbol">${symbol}</div>
                <div class="watchlist-name">${data.name}</div>
            </div>
            <div class="watchlist-price">
                <div class="watchlist-value">$${data.price.toFixed(2)}</div>
                <div class="watchlist-change ${data.change >= 0 ? 'positive' : 'negative'}">${data.changePercent >= 0 ? '+' : ''}${data.changePercent.toFixed(2)}%</div>
            </div>
        `;
        
        item.addEventListener('click', () => {
            currentSymbol = symbol;
            document.getElementById('symbolSelect').value = symbol;
            updatePriceChart();
            updateCurrentPriceDisplay();
            updateIndicators();
            showToast('Symbol Selected', `Now viewing ${symbol}`, 'info');
        });
        
        container.appendChild(item);
    });
}

function filterWatchlist(query) {
    const items = document.querySelectorAll('.watchlist-item');
    items.forEach(item => {
        const symbol = item.dataset.symbol.toLowerCase();
        const name = marketData[item.dataset.symbol]?.name.toLowerCase() || '';
        const matches = symbol.includes(query) || name.includes(query);
        item.style.display = matches ? 'flex' : 'none';
    });
}

// Portfolio functionality
function initializePortfolio() {
    updatePortfolioDisplay();
    
    // Portfolio period selector
    document.querySelectorAll('[data-period]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('[data-period]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            updatePortfolioChart();
        });
    });
    
    // Portfolio actions
    document.getElementById('addPosition').addEventListener('click', () => {
        showModal('positionModal');
    });
    
    document.getElementById('importData').addEventListener('click', () => {
        showToast('Import', 'Import functionality coming soon', 'info');
    });
    
    document.getElementById('exportReport').addEventListener('click', () => {
        exportPortfolioReport();
    });
}

function updatePortfolioDisplay() {
    // Update portfolio stats
    const totalValue = portfolioData.holdings.reduce((sum, holding) => {
        return sum + (holding.shares * holding.currentPrice);
    }, 0) + portfolioData.cash;
    
    const totalCost = portfolioData.holdings.reduce((sum, holding) => {
        return sum + (holding.shares * holding.avgCost);
    }, 0);
    
    const totalGain = totalValue - totalCost - portfolioData.cash;
    const totalGainPercent = (totalGain / totalCost) * 100;
    
    document.getElementById('portfolioTotalValue').textContent = `$${totalValue.toLocaleString()}`;
    document.getElementById('portfolioTotalGain').textContent = `${totalGain >= 0 ? '+' : ''}$${Math.abs(totalGain).toLocaleString()}`;
    document.getElementById('portfolioTotalPercent').textContent = `${totalGainPercent >= 0 ? '+' : ''}${totalGainPercent.toFixed(2)}%`;
    document.getElementById('portfolioCash').textContent = `$${portfolioData.cash.toLocaleString()}`;
    
    // Update holdings table
    updateHoldingsTable();
}

function updateHoldingsTable() {
    const tbody = document.getElementById('holdingsTableBody');
    tbody.innerHTML = '';
    
    portfolioData.holdings.forEach((holding, index) => {
        const currentData = marketData[holding.symbol];
        if (!currentData) return;
        
        const marketValue = holding.shares * currentData.price;
        const costBasis = holding.shares * holding.avgCost;
        const gainLoss = marketValue - costBasis;
        const gainLossPercent = (gainLoss / costBasis) * 100;
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${holding.symbol}</strong></td>
            <td>${holding.shares}</td>
            <td>$${holding.avgCost.toFixed(2)}</td>
            <td>$${currentData.price.toFixed(2)}</td>
            <td>$${marketValue.toLocaleString()}</td>
            <td class="${gainLoss >= 0 ? 'positive' : 'negative'}">${gainLoss >= 0 ? '+' : ''}$${Math.abs(gainLoss).toFixed(2)}</td>
            <td class="${gainLoss >= 0 ? 'positive' : 'negative'}">${gainLossPercent >= 0 ? '+' : ''}${gainLossPercent.toFixed(2)}%</td>
            <td>
                <button class="btn-small" onclick="editPosition(${index})">Edit</button>
                <button class="btn-small" onclick="removePosition(${index})">Remove</button>
            </td>
        `;
        
        tbody.appendChild(row);
    });
}

function addPosition(symbol, shares, avgCost, date) {
    portfolioData.holdings.push({
        symbol,
        shares: parseInt(shares),
        avgCost: parseFloat(avgCost),
        currentPrice: marketData[symbol]?.price || 0,
        date
    });
    
    updatePortfolioDisplay();
    updatePortfolioChart();
    showToast('Success', `Added ${shares} shares of ${symbol}`, 'success');
}

function removePosition(index) {
    const holding = portfolioData.holdings[index];
    portfolioData.holdings.splice(index, 1);
    updatePortfolioDisplay();
    updatePortfolioChart();
    showToast('Removed', `Removed ${holding.symbol} position`, 'info');
}

function exportPortfolioReport() {
    const report = {
        timestamp: new Date().toISOString(),
        totalValue: portfolioData.totalValue,
        holdings: portfolioData.holdings
    };
    
    const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `portfolio-report-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    
    showToast('Exported', 'Portfolio report downloaded', 'success');
}

// Alerts functionality
function initializeAlerts() {
    updateAlertsDisplay();
    
    document.getElementById('createAlert').addEventListener('click', () => {
        showModal('alertModal');
    });
}

function updateAlertsDisplay() {
    updateActiveAlerts();
    updateAlertHistory();
}

function updateActiveAlerts() {
    const container = document.getElementById('alertsList');
    container.innerHTML = '';
    
    const activeAlerts = alertsData.filter(alert => alert.status === 'active');
    
    activeAlerts.forEach(alert => {
        const item = document.createElement('div');
        item.className = 'alert-item';
        
        const typeText = alert.type === 'above' ? 'above' : alert.type === 'below' ? 'below' : 'change of';
        
        item.innerHTML = `
            <div class="alert-header">
                <div class="alert-symbol">${alert.symbol}</div>
                <div class="alert-status active">Active</div>
            </div>
            <div class="alert-details">
                Alert when price ${typeText} $${alert.value}
                <br>Created: ${alert.created.toLocaleDateString()}
            </div>
        `;
        
        container.appendChild(item);
    });
    
    if (activeAlerts.length === 0) {
        container.innerHTML = '<div class="alert-item">No active alerts</div>';
    }
}

function updateAlertHistory() {
    const container = document.getElementById('alertHistory');
    container.innerHTML = '';
    
    const triggeredAlerts = alertsData.filter(alert => alert.status === 'triggered');
    
    triggeredAlerts.forEach(alert => {
        const item = document.createElement('div');
        item.className = 'alert-item';
        
        item.innerHTML = `
            <div class="alert-header">
                <div class="alert-symbol">${alert.symbol}</div>
                <div class="alert-status triggered">Triggered</div>
            </div>
            <div class="alert-details">
                Price alert triggered at $${alert.value}
                <br>Created: ${alert.created.toLocaleDateString()}
            </div>
        `;
        
        container.appendChild(item);
    });
    
    if (triggeredAlerts.length === 0) {
        container.innerHTML = '<div class="alert-item">No alert history</div>';
    }
}

function createAlert(symbol, type, value, email, push) {
    const newAlert = {
        id: Date.now(),
        symbol,
        type,
        value: parseFloat(value),
        status: 'active',
        created: new Date(),
        email,
        push
    };
    
    alertsData.push(newAlert);
    updateAlertsDisplay();
    showToast('Alert Created', `Alert set for ${symbol}`, 'success');
}

// Screener functionality
function initializeScreener() {
    updateScreenerResults();
    
    document.getElementById('applyFilters').addEventListener('click', () => {
        applyScreenerFilters();
    });
    
    document.getElementById('resetFilters').addEventListener('click', () => {
        resetScreenerFilters();
    });
}

function updateScreenerResults() {
    const tbody = document.getElementById('screenerResultsBody');
    tbody.innerHTML = '';
    
    Object.keys(marketData).forEach(symbol => {
        const data = marketData[symbol];
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${symbol}</strong></td>
            <td>${data.name}</td>
            <td>$${data.price.toFixed(2)}</td>
            <td class="${data.change >= 0 ? 'positive' : 'negative'}">${data.changePercent >= 0 ? '+' : ''}${data.changePercent.toFixed(2)}%</td>
            <td>${data.volume}</td>
            <td>${data.marketCap}</td>
            <td>${data.pe}</td>
            <td>
                <button class="btn-small" onclick="addToWatchlistFromScreener('${symbol}')">Add</button>
                <button class="btn-small" onclick="viewSymbol('${symbol}')">View</button>
            </td>
        `;
        
        tbody.appendChild(row);
    });
    
    document.getElementById('resultsCount').textContent = `Found ${Object.keys(marketData).length} stocks`;
}

function applyScreenerFilters() {
    const marketCap = document.getElementById('marketCapFilter').value;
    const peMin = parseFloat(document.getElementById('peMin').value) || 0;
    const peMax = parseFloat(document.getElementById('peMax').value) || Infinity;
    const priceMin = parseFloat(document.getElementById('priceMin').value) || 0;
    const priceMax = parseFloat(document.getElementById('priceMax').value) || Infinity;
    const volume = document.getElementById('volumeFilter').value;
    const sector = document.getElementById('sectorScreenerFilter').value;
    
    const tbody = document.getElementById('screenerResultsBody');
    tbody.innerHTML = '';
    
    let filteredSymbols = Object.keys(marketData).filter(symbol => {
        const data = marketData[symbol];
        
        // Market cap filter
        if (marketCap) {
            const cap = parseFloat(data.marketCap);
            if (marketCap === 'large' && cap < 10) return false;
            if (marketCap === 'mid' && (cap < 2 || cap > 10)) return false;
            if (marketCap === 'small' && cap > 2) return false;
        }
        
        // P/E filter
        if (data.pe < peMin || data.pe > peMax) return false;
        
        // Price filter
        if (data.price < priceMin || data.price > priceMax) return false;
        
        // Volume filter
        if (volume) {
            const vol = parseFloat(data.volume);
            if (volume === '1m' && vol < 1) return false;
            if (volume === '5m' && vol < 5) return false;
            if (volume === '10m' && vol < 10) return false;
        }
        
        // Sector filter
        if (sector && data.sector.toLowerCase() !== sector) return false;
        
        return true;
    });
    
    filteredSymbols.forEach(symbol => {
        const data = marketData[symbol];
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${symbol}</strong></td>
            <td>${data.name}</td>
            <td>$${data.price.toFixed(2)}</td>
            <td class="${data.change >= 0 ? 'positive' : 'negative'}">${data.changePercent >= 0 ? '+' : ''}${data.changePercent.toFixed(2)}%</td>
            <td>${data.volume}</td>
            <td>${data.marketCap}</td>
            <td>${data.pe}</td>
            <td>
                <button class="btn-small" onclick="addToWatchlistFromScreener('${symbol}')">Add</button>
                <button class="btn-small" onclick="viewSymbol('${symbol}')">View</button>
            </td>
        `;
        
        tbody.appendChild(row);
    });
    
    document.getElementById('resultsCount').textContent = `Found ${filteredSymbols.length} stocks`;
    showToast('Filters Applied', `${filteredSymbols.length} stocks match your criteria`, 'info');
}

function resetScreenerFilters() {
    document.getElementById('marketCapFilter').value = '';
    document.getElementById('peMin').value = '';
    document.getElementById('peMax').value = '';
    document.getElementById('priceMin').value = '';
    document.getElementById('priceMax').value = '';
    document.getElementById('volumeFilter').value = '';
    document.getElementById('sectorScreenerFilter').value = '';
    
    updateScreenerResults();
    showToast('Filters Reset', 'All filters have been cleared', 'info');
}

function addToWatchlistFromScreener(symbol) {
    if (!watchlistData.includes(symbol)) {
        watchlistData.push(symbol);
        updateWatchlistDisplay();
        showToast('Added to Watchlist', `${symbol} added to your watchlist`, 'success');
    } else {
        showToast('Already in Watchlist', `${symbol} is already in your watchlist`, 'warning');
    }
}

function viewSymbol(symbol) {
    currentSymbol = symbol;
    document.getElementById('symbolSelect').value = symbol;
    updatePriceChart();
    updateCurrentPriceDisplay();
    updateIndicators();
    showSection('dashboard');
    showToast('Symbol Selected', `Now viewing ${symbol}`, 'info');
}

// Analysis functionality
function initializeAnalysis() {
    updateAnalysisDisplay();
    
    document.querySelectorAll('[data-analysis]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('[data-analysis]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const analysisType = btn.dataset.analysis;
            showAnalysisPanel(analysisType);
        });
    });
}

function updateAnalysisDisplay() {
    updateCorrelationMatrix();
    updateVolatilityAnalysis();
    updateMomentumAnalysis();
    updateSentimentAnalysis();
}

function showAnalysisPanel(type) {
    document.querySelectorAll('.analysis-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    
    document.getElementById(`${type}Panel`).classList.add('active');
}

function updateCorrelationMatrix() {
    const container = document.getElementById('correlationMatrix');
    container.innerHTML = '';
    
    const symbols = Object.keys(marketData).slice(0, 6); // Limit for display
    
    symbols.forEach(symbol1 => {
        symbols.forEach(symbol2 => {
            const correlation = calculateCorrelation(symbol1, symbol2);
            const cell = document.createElement('div');
            cell.className = 'matrix-cell';
            
            if (symbol1 === symbol2) {
                cell.innerHTML = `
                    <div class="matrix-symbol">${symbol1}</div>
                    <div class="matrix-value">1.00</div>
                `;
                cell.style.background = 'rgba(16, 185, 129, 0.3)';
            } else {
                cell.innerHTML = `
                    <div class="matrix-symbol">${symbol1}-${symbol2}</div>
                    <div class="matrix-value">${correlation.toFixed(2)}</div>
                `;
                
                const intensity = Math.abs(correlation);
                if (correlation > 0) {
                    cell.style.background = `rgba(16, 185, 129, ${intensity * 0.5})`;
                } else {
                    cell.style.background = `rgba(239, 68, 68, ${intensity * 0.5})`;
                }
            }
            
            container.appendChild(cell);
        });
    });
}

function updateVolatilityAnalysis() {
    const container = document.getElementById('volatilityContent');
    container.innerHTML = `
        <div class="analysis-grid">
            ${Object.keys(marketData).map(symbol => {
                const volatility = calculateVolatility(symbol);
                return `
                    <div class="analysis-item">
                        <div class="analysis-symbol">${symbol}</div>
                        <div class="analysis-value">${volatility.toFixed(2)}%</div>
                        <div class="analysis-label">30-Day Volatility</div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}

function updateMomentumAnalysis() {
    const container = document.getElementById('momentumContent');
    container.innerHTML = `
        <div class="analysis-grid">
            ${Object.keys(marketData).map(symbol => {
                const momentum = calculateMomentum(symbol);
                return `
                    <div class="analysis-item">
                        <div class="analysis-symbol">${symbol}</div>
                        <div class="analysis-value ${momentum >= 0 ? 'positive' : 'negative'}">${momentum >= 0 ? '+' : ''}${momentum.toFixed(2)}%</div>
                        <div class="analysis-label">20-Day Momentum</div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}

function updateSentimentAnalysis() {
    const container = document.getElementById('sentimentContent');
    const overallSentiment = calculateOverallSentiment();
    
    container.innerHTML = `
        <div class="sentiment-overview">
            <div class="sentiment-gauge">
                <div class="sentiment-value ${overallSentiment >= 60 ? 'positive' : overallSentiment <= 40 ? 'negative' : 'neutral'}">${overallSentiment}</div>
                <div class="sentiment-label">Market Sentiment Score</div>
            </div>
        </div>
        <div class="sentiment-breakdown">
            <div class="sentiment-item">
                <div class="sentiment-category">Bullish Signals</div>
                <div class="sentiment-count">${Math.floor(Math.random() * 15) + 5}</div>
            </div>
            <div class="sentiment-item">
                <div class="sentiment-category">Bearish Signals</div>
                <div class="sentiment-count">${Math.floor(Math.random() * 10) + 2}</div>
            </div>
            <div class="sentiment-item">
                <div class="sentiment-category">Neutral Signals</div>
                <div class="sentiment-count">${Math.floor(Math.random() * 8) + 3}</div>
            </div>
        </div>
    `;
}

// Notification functionality
function initializeNotifications() {
    updateNotificationDisplay();
    updateNotificationBadge();
    
    document.getElementById('notificationBtn').addEventListener('click', () => {
        toggleNotificationPanel();
    });
    
    document.getElementById('notificationPanelClose').addEventListener('click', () => {
        hideNotificationPanel();
    });
}

function updateNotificationDisplay() {
    const container = document.getElementById('notificationList');
    container.innerHTML = '';
    
    notifications.forEach(notification => {
        const item = document.createElement('div');
        item.className = `notification-item ${notification.read ? 'read' : 'unread'}`;
        
        item.innerHTML = `
            <div class="notification-title">${notification.title}</div>
            <div class="notification-message">${notification.message}</div>
            <div class="notification-time">${notification.time}</div>
        `;
        
        item.addEventListener('click', () => {
            markNotificationAsRead(notification.id);
        });
        
        container.appendChild(item);
    });
}

function updateNotificationBadge() {
    const unreadCount = notifications.filter(n => !n.read).length;
    const badge = document.getElementById('notificationBadge');
    
    if (unreadCount > 0) {
        badge.textContent = unreadCount;
        badge.style.display = 'block';
    } else {
        badge.style.display = 'none';
    }
}

function toggleNotificationPanel() {
    const panel = document.getElementById('notificationPanel');
    panel.classList.toggle('active');
}

function hideNotificationPanel() {
    const panel = document.getElementById('notificationPanel');
    panel.classList.remove('active');
}

function markNotificationAsRead(id) {
    const notification = notifications.find(n => n.id === id);
    if (notification) {
        notification.read = true;
        updateNotificationDisplay();
        updateNotificationBadge();
    }
}

function addNotification(title, message, type = 'info') {
    const notification = {
        id: Date.now(),
        title,
        message,
        time: 'Just now',
        read: false,
        type
    };
    
    notifications.unshift(notification);
    updateNotificationDisplay();
    updateNotificationBadge();
}

// Modal functionality
function initializeModals() {
    // Alert modal
    document.getElementById('alertModalClose').addEventListener('click', () => {
        hideModal('alertModal');
    });
    
    document.getElementById('cancelAlert').addEventListener('click', () => {
        hideModal('alertModal');
    });
    
    document.getElementById('saveAlert').addEventListener('click', () => {
        saveAlert();
    });
    
    // Position modal
    document.getElementById('positionModalClose').addEventListener('click', () => {
        hideModal('positionModal');
    });
    
    document.getElementById('cancelPosition').addEventListener('click', () => {
        hideModal('positionModal');
    });
    
    document.getElementById('savePosition').addEventListener('click', () => {
        savePosition();
    });
    
    // Close modals when clicking outside
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                hideModal(modal.id);
            }
        });
    });
}

function showModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('active');
    
    // Focus first input
    const firstInput = modal.querySelector('input, select');
    if (firstInput) {
        setTimeout(() => firstInput.focus(), 100);
    }
}

function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('active');
    
    // Reset form
    const form = modal.querySelector('form');
    if (form) {
        form.reset();
    }
}

function saveAlert() {
    const form = document.getElementById('alertForm');
    const formData = new FormData(form);
    
    const symbol = formData.get('symbol');
    const type = formData.get('type');
    const value = formData.get('value');
    const email = formData.get('email') === 'on';
    const push = formData.get('push') === 'on';
    
    if (!symbol || !type || !value) {
        showToast('Error', 'Please fill in all required fields', 'error');
        return;
    }
    
    createAlert(symbol, type, value, email, push);
    hideModal('alertModal');
}

function savePosition() {
    const form = document.getElementById('positionForm');
    const formData = new FormData(form);
    
    const symbol = formData.get('symbol');
    const shares = formData.get('shares');
    const avgCost = formData.get('avgCost');
    const date = formData.get('date');
    
    if (!symbol || !shares || !avgCost || !date) {
        showToast('Error', 'Please fill in all required fields', 'error');
        return;
    }
    
    addPosition(symbol, shares, avgCost, date);
    hideModal('positionModal');
}

// Real-time updates
function initializeRealTimeUpdates() {
    // Simulate real-time price updates
    updateInterval = setInterval(() => {
        updateMarketPrices();
        updateMarketStatus();
        checkAlerts();
    }, 5000); // Update every 5 seconds
}

function startRealTimeUpdates() {
    console.log('Real-time updates started');
}

function updateMarketPrices() {
    // Simulate price changes
    Object.keys(marketData).forEach(symbol => {
        const data = marketData[symbol];
        const changePercent = (Math.random() - 0.5) * 0.02; // ±1% max change
        const newPrice = data.price * (1 + changePercent);
        const priceChange = newPrice - data.price;
        
        data.price = newPrice;
        data.change = priceChange;
        data.changePercent = (priceChange / (newPrice - priceChange)) * 100;
        
        // Update high/low
        data.high = Math.max(data.high, newPrice);
        data.low = Math.min(data.low, newPrice);
        
        // Add to historical data
        if (data.data.length > 100) {
            data.data.shift();
        }
        data.data.push({
            date: new Date().toISOString(),
            price: newPrice,
            sma20: data.indicators.sma20,
            ema: data.indicators.ema
        });
    });
    
    // Update index data
    Object.keys(indexData).forEach(symbol => {
        const data = indexData[symbol];
        const changePercent = (Math.random() - 0.5) * 0.01;
        const newPrice = data.price * (1 + changePercent);
        const priceChange = newPrice - data.price;
        
        data.price = newPrice;
        data.change = priceChange;
        data.changePercent = (priceChange / (newPrice - priceChange)) * 100;
    });
    
    // Update displays
    updateMarketOverview();
    updateCurrentPriceDisplay();
    updateIndicators();
    updateWatchlistDisplay();
    updatePortfolioDisplay();
    updateHeatmap();
    
    if (charts.priceChart) {
        updatePriceChart();
    }
}

function checkAlerts() {
    alertsData.forEach(alert => {
        if (alert.status !== 'active') return;
        
        const currentPrice = marketData[alert.symbol]?.price;
        if (!currentPrice) return;
        
        let triggered = false;
        
        switch (alert.type) {
            case 'above':
                triggered = currentPrice >= alert.value;
                break;
            case 'below':
                triggered = currentPrice <= alert.value;
                break;
            case 'change':
                const changePercent = Math.abs(marketData[alert.symbol].changePercent);
                triggered = changePercent >= alert.value;
                break;
        }
        
        if (triggered) {
            alert.status = 'triggered';
            addNotification(
                'Price Alert Triggered',
                `${alert.symbol} ${alert.type} $${alert.value}`,
                'alert'
            );
            showToast('Alert Triggered', `${alert.symbol} alert triggered`, 'warning');
        }
    });
    
    updateAlertsDisplay();
}

function refreshMarketData() {
    showToast('Refreshing', 'Updating market data...', 'info');
    
    // Simulate data refresh
    setTimeout(() => {
        updateMarketPrices();
        showToast('Updated', 'Market data refreshed', 'success');
    }, 1000);
}

// Utility functions
function generateHistoricalData() {
    Object.keys(marketData).forEach(symbol => {
        const data = marketData[symbol];
        const days = 30;
        const basePrice = data.price;
        
        data.data = [];
        
        for (let i = days; i >= 0; i--) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            
            const randomChange = (Math.random() - 0.5) * 0.05;
            const price = basePrice * (1 + randomChange * (i / days));
            
            data.data.push({
                date: date.toISOString(),
                price: price,
                sma20: price * (1 + (Math.random() - 0.5) * 0.02),
                ema: price * (1 + (Math.random() - 0.5) * 0.015)
            });
        }
    });
}

function generatePortfolioHistory() {
    const history = [];
    const days = 30;
    const baseValue = portfolioData.totalValue;
    
    for (let i = days; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        
        const randomChange = (Math.random() - 0.5) * 0.03;
        const value = baseValue * (1 + randomChange * (i / days));
        
        history.push({
            date: date.toLocaleDateString(),
            value: value
        });
    }
    
    return history;
}

function calculateCorrelation(symbol1, symbol2) {
    // Simplified correlation calculation
    if (symbol1 === symbol2) return 1;
    
    const hash1 = symbol1.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
    const hash2 = symbol2.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
    
    return ((hash1 + hash2) % 200 - 100) / 100;
}

function calculateVolatility(symbol) {
    // Simplified volatility calculation
    const hash = symbol.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
    return (hash % 50) + 10; // 10-60% range
}

function calculateMomentum(symbol) {
    // Simplified momentum calculation
    const data = marketData[symbol];
    return data.changePercent * (1 + Math.random() * 2);
}

function calculateOverallSentiment() {
    const positiveCount = Object.values(marketData).filter(d => d.change > 0).length;
    const totalCount = Object.keys(marketData).length;
    return Math.round((positiveCount / totalCount) * 100);
}

function showToast(title, message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    toast.innerHTML = `
        <div class="toast-title">${title}</div>
        <div class="toast-message">${message}</div>
    `;
    
    container.appendChild(toast);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        toast.style.transform = 'translateX(100%)';
        toast.style.opacity = '0';
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (updateInterval) {
        clearInterval(updateInterval);
    }
});

// Export functions for global access
window.addToWatchlistFromScreener = addToWatchlistFromScreener;
window.viewSymbol = viewSymbol;
window.editPosition = (index) => {
    showToast('Edit Position', 'Edit functionality coming soon', 'info');
};
window.removePosition = removePosition;

console.log('Market Analyzer Pro script loaded');

function showAddToWatchlistModal() {
    showToast('Add to Watchlist', 'Add to Watchlist functionality coming soon', 'info');
}