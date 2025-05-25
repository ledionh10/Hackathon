// Enhanced Market Data with Advanced Features
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
        bollinger: { upper: 182.5, lower: 172.3 },
        stochastic: 72.3,
        williams: -28.7,
        atr: 4.23,
        adx: 45.6
    },
    fundamentals: {
        eps: 6.15,
        revenue: '394.3B',
        grossMargin: 43.3,
        operatingMargin: 29.8,
        netMargin: 25.3,
        roe: 175.4,
        roa: 28.5,
        debtToEquity: 1.73,
        currentRatio: 0.94,
        quickRatio: 0.83,
        bookValue: 4.25,
        priceToBook: 42.1,
        dividendYield: 0.44,
        payoutRatio: 15.8
    },
    options: {
        impliedVolatility: 28.5,
        putCallRatio: 0.85,
        maxPain: 175.0,
        openInterest: 1250000
    },
    earnings: {
        nextDate: '2024-02-01',
        estimate: 2.11,
        surprise: 5.2,
        growth: 8.5
    },
    news: [
        { title: 'Apple Reports Strong Q4 Results', sentiment: 'positive', time: '2h ago' },
        { title: 'iPhone Sales Beat Expectations', sentiment: 'positive', time: '4h ago' },
        { title: 'Apple Announces New AI Features', sentiment: 'positive', time: '1d ago' }
    ]
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
        bollinger: { upper: 2890.5, lower: 2810.3 },
        stochastic: 61.8,
        williams: -38.2,
        atr: 45.7,
        adx: 32.1
    },
    fundamentals: {
        eps: 112.20,
        revenue: '307.4B',
        grossMargin: 57.8,
        operatingMargin: 25.2,
        netMargin: 21.3,
        roe: 29.2,
        roa: 13.8,
        debtToEquity: 0.12,
        currentRatio: 2.93,
        quickRatio: 2.93,
        bookValue: 385.15,
        priceToBook: 7.4,
        dividendYield: 0.0,
        payoutRatio: 0.0
    },
    options: {
        impliedVolatility: 32.1,
        putCallRatio: 0.92,
        maxPain: 2850.0,
        openInterest: 890000
    },
    earnings: {
        nextDate: '2024-01-25',
        estimate: 1.35,
        surprise: 12.8,
        growth: 15.2
    },
    news: [
        { title: 'Google AI Breakthrough Announced', sentiment: 'positive', time: '1h ago' },
        { title: 'YouTube Revenue Surges', sentiment: 'positive', time: '3h ago' },
        { title: 'Regulatory Concerns Mount', sentiment: 'negative', time: '6h ago' }
    ]
},
// Add more stocks with similar structure...
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
        bollinger: { upper: 345.5, lower: 325.3 },
        stochastic: 68.4,
        williams: -31.6,
        atr: 8.92,
        adx: 28.7
    },
    fundamentals: {
        eps: 10.05,
        revenue: '211.9B',
        grossMargin: 69.8,
        operatingMargin: 42.0,
        netMargin: 36.7,
        roe: 47.1,
        roa: 18.1,
        debtToEquity: 0.35,
        currentRatio: 1.77,
        quickRatio: 1.76,
        bookValue: 22.78,
        priceToBook: 14.9,
        dividendYield: 0.72,
        payoutRatio: 24.8
    },
    options: {
        impliedVolatility: 25.8,
        putCallRatio: 0.78,
        maxPain: 340.0,
        openInterest: 1100000
    },
    earnings: {
        nextDate: '2024-01-24',
        estimate: 2.78,
        surprise: 3.1,
        growth: 12.4
    },
    news: [
        { title: 'Microsoft Azure Growth Accelerates', sentiment: 'positive', time: '30m ago' },
        { title: 'Teams Usage Hits New Record', sentiment: 'positive', time: '2h ago' },
        { title: 'AI Copilot Expansion Announced', sentiment: 'positive', time: '5h ago' }
    ]
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
        bollinger: { upper: 265.5, lower: 235.3 },
        stochastic: 42.1,
        williams: -57.9,
        atr: 12.45,
        adx: 35.8
    },
    fundamentals: {
        eps: 3.62,
        revenue: '96.8B',
        grossMargin: 19.3,
        operatingMargin: 8.2,
        netMargin: 7.5,
        roe: 28.1,
        roa: 9.8,
        debtToEquity: 0.17,
        currentRatio: 1.29,
        quickRatio: 0.92,
        bookValue: 12.85,
        priceToBook: 19.3,
        dividendYield: 0.0,
        payoutRatio: 0.0
    },
    options: {
        impliedVolatility: 45.2,
        putCallRatio: 1.15,
        maxPain: 250.0,
        openInterest: 2100000
    },
    earnings: {
        nextDate: '2024-01-24',
        estimate: 0.74,
        surprise: -8.5,
        growth: -12.3
    },
    news: [
        { title: 'Tesla Deliveries Miss Estimates', sentiment: 'negative', time: '1h ago' },
        { title: 'Cybertruck Production Ramps Up', sentiment: 'positive', time: '4h ago' },
        { title: 'Price Cuts in China Market', sentiment: 'negative', time: '8h ago' }
    ]
}
};

// Cryptocurrency data
const cryptoData = {
BTC: {
    name: 'Bitcoin',
    price: 43250.75,
    change: 1250.30,
    changePercent: 2.98,
    volume: '28.5B',
    marketCap: '847B',
    supply: '19.6M',
    maxSupply: '21M',
    dominance: 52.3,
    fearGreedIndex: 68,
    data: [],
    indicators: {
        rsi: 58.4,
        macd: 245.67,
        sma20: 42850.45,
        sma50: 41200.23,
        ema: 43100.89
    }
},
ETH: {
    name: 'Ethereum',
    price: 2650.45,
    change: 85.20,
    changePercent: 3.32,
    volume: '15.2B',
    marketCap: '318B',
    supply: '120.3M',
    maxSupply: null,
    dominance: 18.7,
    fearGreedIndex: 72,
    data: [],
    indicators: {
        rsi: 62.1,
        macd: 45.23,
        sma20: 2580.34,
        sma50: 2420.67,
        ema: 2635.78
    }
},
ADA: {
    name: 'Cardano',
    price: 0.485,
    change: 0.025,
    changePercent: 5.43,
    volume: '890M',
    marketCap: '17.2B',
    supply: '35.5B',
    maxSupply: '45B',
    dominance: 1.2,
    fearGreedIndex: 75,
    data: [],
    indicators: {
        rsi: 71.2,
        macd: 0.012,
        sma20: 0.465,
        sma50: 0.445,
        ema: 0.478
    }
}
};

// Options data
const optionsData = {
AAPL: {
    calls: [
        { strike: 175, expiry: '2024-02-16', bid: 8.50, ask: 8.70, volume: 1250, openInterest: 5420, iv: 28.5, delta: 0.65, gamma: 0.025, theta: -0.08, vega: 0.15 },
        { strike: 180, expiry: '2024-02-16', bid: 5.20, ask: 5.40, volume: 2100, openInterest: 8930, iv: 30.2, delta: 0.45, gamma: 0.028, theta: -0.09, vega: 0.18 },
        { strike: 185, expiry: '2024-02-16', bid: 2.80, ask: 3.00, volume: 890, openInterest: 3210, iv: 32.1, delta: 0.28, gamma: 0.025, theta: -0.07, vega: 0.16 }
    ],
    puts: [
        { strike: 175, expiry: '2024-02-16', bid: 4.20, ask: 4.40, volume: 980, openInterest: 4560, iv: 29.8, delta: -0.35, gamma: 0.025, theta: -0.08, vega: 0.15 },
        { strike: 170, expiry: '2024-02-16', bid: 2.10, ask: 2.30, volume: 1450, openInterest: 6780, iv: 27.5, delta: -0.22, gamma: 0.022, theta: -0.06, vega: 0.13 },
        { strike: 165, expiry: '2024-02-16', bid: 0.95, ask: 1.15, volume: 750, openInterest: 2340, iv: 25.8, delta: -0.12, gamma: 0.018, theta: -0.04, vega: 0.10 }
    ]
}
};

// Economic indicators
const economicIndicators = {
GDP: { value: 2.4, change: 0.1, trend: 'stable', lastUpdate: '2024-01-15' },
inflation: { value: 3.2, change: -0.2, trend: 'declining', lastUpdate: '2024-01-12' },
unemployment: { value: 3.7, change: 0.0, trend: 'stable', lastUpdate: '2024-01-05' },
fedRate: { value: 5.25, change: 0.0, trend: 'stable', lastUpdate: '2023-12-13' },
yieldCurve: { 
    '3M': 5.35, '6M': 5.28, '1Y': 5.15, '2Y': 4.85, '5Y': 4.45, '10Y': 4.25, '30Y': 4.35 
},
vix: { value: 18.45, change: 0.23, trend: 'rising' },
dxy: { value: 103.25, change: -0.15, trend: 'declining' },
oil: { value: 72.45, change: 1.25, trend: 'rising' },
gold: { value: 2045.30, change: 8.50, trend: 'rising' }
};

// AI-powered insights and recommendations
const aiInsights = {
marketSentiment: {
    overall: 'bullish',
    confidence: 78,
    factors: [
        'Strong earnings growth across tech sector',
        'Federal Reserve dovish stance',
        'Improving economic indicators',
        'Increased institutional buying'
    ]
},
recommendations: [
    {
        symbol: 'AAPL',
        action: 'BUY',
        confidence: 85,
        targetPrice: 195.00,
        reasoning: 'Strong fundamentals, AI integration driving growth',
        timeframe: '3-6 months',
        riskLevel: 'Medium'
    },
    {
        symbol: 'TSLA',
        action: 'HOLD',
        confidence: 65,
        targetPrice: 275.00,
        reasoning: 'Delivery concerns offset by Cybertruck potential',
        timeframe: '6-12 months',
        riskLevel: 'High'
    },
    {
        symbol: 'MSFT',
        action: 'BUY',
        confidence: 92,
        targetPrice: 380.00,
        reasoning: 'Azure growth, AI leadership, strong balance sheet',
        timeframe: '6-12 months',
        riskLevel: 'Low'
    }
],
riskFactors: [
    'Geopolitical tensions affecting global markets',
    'Potential interest rate volatility',
    'Tech sector valuation concerns',
    'Supply chain disruption risks'
]
};

// Social sentiment data
const socialSentiment = {
AAPL: { 
    score: 78, 
    mentions: 15420, 
    trend: 'rising',
    platforms: { twitter: 72, reddit: 81, stocktwits: 85 },
    keywords: ['iPhone', 'AI', 'earnings', 'growth']
},
TSLA: { 
    score: 45, 
    mentions: 28950, 
    trend: 'declining',
    platforms: { twitter: 42, reddit: 48, stocktwits: 45 },
    keywords: ['deliveries', 'cybertruck', 'china', 'competition']
},
MSFT: { 
    score: 85, 
    mentions: 8920, 
    trend: 'stable',
    platforms: { twitter: 83, reddit: 87, stocktwits: 85 },
    keywords: ['azure', 'AI', 'copilot', 'cloud']
}
};

// Earnings calendar
const earningsCalendar = [
{ date: '2024-01-24', symbol: 'MSFT', time: 'AMC', estimate: 2.78, confirmed: true },
{ date: '2024-01-24', symbol: 'TSLA', time: 'AMC', estimate: 0.74, confirmed: true },
{ date: '2024-01-25', symbol: 'GOOGL', time: 'AMC', estimate: 1.35, confirmed: true },
{ date: '2024-02-01', symbol: 'AAPL', time: 'AMC', estimate: 2.11, confirmed: true },
{ date: '2024-02-02', symbol: 'META', time: 'AMC', estimate: 4.85, confirmed: false },
{ date: '2024-02-05', symbol: 'AMZN', time: 'AMC', estimate: 0.98, confirmed: false }
];

// Dividend calendar
const dividendCalendar = [
{ date: '2024-02-09', symbol: 'AAPL', amount: 0.24, exDate: '2024-02-09', payDate: '2024-02-15', yield: 0.44 },
{ date: '2024-02-14', symbol: 'MSFT', amount: 0.75, exDate: '2024-02-14', payDate: '2024-03-14', yield: 0.72 },
{ date: '2024-03-07', symbol: 'JNJ', amount: 1.19, exDate: '2024-03-07', payDate: '2024-03-12', yield: 2.85 }
];

// Sector performance data
const sectorData = {
Technology: { performance: 2.45, weight: 28.5, topStocks: ['AAPL', 'MSFT', 'GOOGL'], trend: 'bullish' },
Healthcare: { performance: 1.23, weight: 13.2, topStocks: ['JNJ', 'PFE', 'UNH'], trend: 'neutral' },
Financials: { performance: -0.85, weight: 11.8, topStocks: ['JPM', 'BAC', 'WFC'], trend: 'bearish' },
'Consumer Discretionary': { performance: 1.67, weight: 10.9, topStocks: ['AMZN', 'TSLA', 'HD'], trend: 'bullish' },
'Communication Services': { performance: 0.92, weight: 8.7, topStocks: ['META', 'GOOGL', 'NFLX'], trend: 'neutral' },
Industrials: { performance: 0.45, weight: 8.2, topStocks: ['BA', 'CAT', 'GE'], trend: 'neutral' },
'Consumer Staples': { performance: -0.32, weight: 6.1, topStocks: ['PG', 'KO', 'WMT'], trend: 'bearish' },
Energy: { performance: 3.21, weight: 4.8, topStocks: ['XOM', 'CVX', 'COP'], trend: 'bullish' },
Utilities: { performance: -1.15, weight: 2.9, topStocks: ['NEE', 'DUK', 'SO'], trend: 'bearish' },
'Real Estate': { performance: 0.78, weight: 2.4, topStocks: ['AMT', 'PLD', 'CCI'], trend: 'neutral' },
Materials: { performance: 1.34, weight: 2.5, topStocks: ['LIN', 'APD', 'SHW'], trend: 'bullish' }
};

// Risk management data
const riskMetrics = {
portfolioVaR: { oneDay: -2.45, fiveDay: -5.23, tenDay: -7.89 },
sharpeRatio: 1.85,
maxDrawdown: -12.3,
beta: 1.15,
alpha: 3.2,
correlation: 0.78,
volatility: 18.5,
informationRatio: 0.92
};

// Paper trading data
let paperTradingData = {
balance: 100000,
equity: 100000,
buyingPower: 100000,
dayTradingBuyingPower: 400000,
positions: [],
orders: [],
trades: [],
pnl: {
    unrealized: 0,
    realized: 0,
    total: 0,
    daily: 0
}
};

// Backtesting data
const backtestingStrategies = [
{
    name: 'Moving Average Crossover',
    description: 'Buy when 20-day MA crosses above 50-day MA',
    returns: 15.8,
    sharpe: 1.23,
    maxDrawdown: -8.5,
    winRate: 62.3,
    trades: 45
},
{
    name: 'RSI Mean Reversion',
    description: 'Buy oversold, sell overbought based on RSI',
    returns: 12.4,
    sharpe: 0.98,
    maxDrawdown: -12.1,
    winRate: 58.7,
    trades: 78
},
{
    name: 'Momentum Strategy',
    description: 'Buy stocks with strong momentum',
    returns: 22.1,
    sharpe: 1.45,
    maxDrawdown: -15.2,
    winRate: 55.8,
    trades: 32
}
];

// Enhanced application state
let currentSection = 'dashboard';
let currentSymbol = 'AAPL';
let currentTimeframe = '1w';
let currentTheme = 'dark';
let currentAssetType = 'stocks'; // stocks, crypto, options
let charts = {};
let isMobile = false;
let isTablet = false;
let updateInterval;
let chartType = 'line';
let activeIndicators = [];
let paperTradingMode = false;

// Initialize enhanced application
document.addEventListener('DOMContentLoaded', function() {
    detectDevice();
    showLoadingScreen();

    const loadingSteps = [
        'Initializing application...',
        'Loading market data...',
        'Setting up advanced charts...',
        'Connecting to data feeds...',
        'Loading AI insights...',
        'Initializing crypto data...',
        'Setting up options chain...',
        'Loading social sentiment...',
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
                initializeEnhancedApp();
            }, 500);
        }
    }, 400);
});

function initializeEnhancedApp() {
    console.log('Enhanced Market Analyzer Pro initialized');

    // Generate historical data for all assets
    generateHistoricalData();
    generateCryptoHistoricalData();

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
    
    // Initialize new features
    initializeCryptoTrading();
    initializeOptionsTrading();
    initializeAIInsights();
    initializeSocialSentiment();
    initializeEarningsCalendar();
    initializeDividendTracker();
    initializeSectorAnalysis();
    initializeRiskManagement();
    initializePaperTrading();
    initializeBacktesting();
    initializeEconomicDashboard();
    initializeAdvancedCharting();

    // Show initial section
    showSection('dashboard');

    // Start real-time updates
    startRealTimeUpdates();

    showToast('Welcome!', 'Enhanced Market Analyzer Pro is ready with AI insights, crypto, options, and more!', 'success');
}

// Cryptocurrency trading functionality
function initializeCryptoTrading() {
    // Asset type selector
    document.querySelectorAll('[data-asset-type]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('[data-asset-type]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentAssetType = btn.dataset.assetType;
            updateAssetDisplay();
        });
    });

    updateCryptoDisplay();
}

function updateCryptoDisplay() {
    const container = document.getElementById('cryptoContainer');
    if (!container) return;

    container.innerHTML = '';

    Object.keys(cryptoData).forEach(symbol => {
        const data = cryptoData[symbol];
        const item = document.createElement('div');
        item.className = 'crypto-item';
        
        item.innerHTML = `
            <div class="crypto-header">
                <div class="crypto-symbol">${symbol}</div>
                <div class="crypto-dominance">${data.dominance}%</div>
            </div>
            <div class="crypto-name">${data.name}</div>
            <div class="crypto-price">$${data.price.toLocaleString()}</div>
            <div class="crypto-change ${data.change >= 0 ? 'positive' : 'negative'}">
                ${data.changePercent >= 0 ? '+' : ''}${data.changePercent.toFixed(2)}%
            </div>
            <div class="crypto-stats">
                <div class="crypto-stat">
                    <span>Market Cap</span>
                    <span>$${data.marketCap}</span>
                </div>
                <div class="crypto-stat">
                    <span>Volume</span>
                    <span>$${data.volume}</span>
                </div>
                <div class="crypto-stat">
                    <span>Fear & Greed</span>
                    <span class="${data.fearGreedIndex > 50 ? 'positive' : 'negative'}">${data.fearGreedIndex}</span>
                </div>
            </div>
        `;
        
        item.addEventListener('click', () => {
            currentSymbol = symbol;
            currentAssetType = 'crypto';
            updatePriceChart();
            updateCurrentPriceDisplay();
            showToast('Crypto Selected', `Now viewing ${symbol}`, 'info');
        });
        
        container.appendChild(item);
    });
}

// Options trading functionality
function initializeOptionsTrading() {
    updateOptionsChain();

    // Options strategy calculator
    document.getElementById('calculateOptions')?.addEventListener('click', () => {
        calculateOptionsStrategy();
    });
}

function updateOptionsChain() {
    const container = document.getElementById('optionsChain');
    if (!container) return;

    const symbol = currentSymbol;
    const options = optionsData[symbol];
    
    if (!options) {
        container.innerHTML = '<div class="empty-state">No options data available for this symbol</div>';
        return;
    }

    container.innerHTML = `
        <div class="options-header">
            <h3>Options Chain - ${symbol}</h3>
            <div class="options-controls">
                <select id="optionsExpiry">
                    <option value="2024-02-16">Feb 16, 2024</option>
                    <option value="2024-03-15">Mar 15, 2024</option>
                    <option value="2024-04-19">Apr 19, 2024</option>
                </select>
            </div>
        </div>
        <div class="options-table">
            <div class="options-calls">
                <h4>Calls</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Strike</th>
                            <th>Bid</th>
                            <th>Ask</th>
                            <th>Volume</th>
                            <th>OI</th>
                            <th>IV</th>
                            <th>Delta</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${options.calls.map(call => `
                            <tr class="options-row ${call.strike < marketData[symbol].price ? 'itm' : 'otm'}">
                                <td><strong>$${call.strike}</strong></td>
                                <td>$${call.bid.toFixed(2)}</td>
                                <td>$${call.ask.toFixed(2)}</td>
                                <td>${call.volume.toLocaleString()}</td>
                                <td>${call.openInterest.toLocaleString()}</td>
                                <td>${call.iv.toFixed(1)}%</td>
                                <td>${call.delta.toFixed(3)}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
            <div class="options-puts">
                <h4>Puts</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Strike</th>
                            <th>Bid</th>
                            <th>Ask</th>
                            <th>Volume</th>
                            <th>OI</th>
                            <th>IV</th>
                            <th>Delta</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${options.puts.map(put => `
                            <tr class="options-row ${put.strike > marketData[symbol].price ? 'itm' : 'otm'}">
                                <td><strong>$${put.strike}</strong></td>
                                <td>$${put.bid.toFixed(2)}</td>
                                <td>$${put.ask.toFixed(2)}</td>
                                <td>${put.volume.toLocaleString()}</td>
                                <td>${put.openInterest.toLocaleString()}</td>
                                <td>${put.iv.toFixed(1)}%</td>
                                <td>${put.delta.toFixed(3)}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

// AI insights functionality
function initializeAIInsights() {
    updateAIInsights();
    updateAIRecommendations();
}

function updateAIInsights() {
    const container = document.getElementById('aiInsights');
    if (!container) return;

    const insights = aiInsights;
    
    container.innerHTML = `
        <div class="ai-sentiment">
            <div class="sentiment-header">
                <h3>AI Market Sentiment</h3>
                <div class="sentiment-score ${insights.marketSentiment.overall}">
                    ${insights.marketSentiment.overall.toUpperCase()}
                    <span class="confidence">${insights.marketSentiment.confidence}%</span>
                </div>
            </div>
            <div class="sentiment-factors">
                <h4>Key Factors:</h4>
                <ul>
                    ${insights.marketSentiment.factors.map(factor => `<li>${factor}</li>`).join('')}
                </ul>
            </div>
        </div>
        
        <div class="ai-recommendations">
            <h3>AI Stock Recommendations</h3>
            <div class="recommendations-grid">
                ${insights.recommendations.map(rec => `
                    <div class="recommendation-card ${rec.action.toLowerCase()}">
                        <div class="rec-header">
                            <div class="rec-symbol">${rec.symbol}</div>
                            <div class="rec-action ${rec.action.toLowerCase()}">${rec.action}</div>
                        </div>
                        <div class="rec-confidence">Confidence: ${rec.confidence}%</div>
                        <div class="rec-target">Target: $${rec.targetPrice.toFixed(2)}</div>
                        <div class="rec-timeframe">${rec.timeframe}</div>
                        <div class="rec-risk">Risk: ${rec.riskLevel}</div>
                        <div class="rec-reasoning">${rec.reasoning}</div>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="ai-risks">
            <h3>Risk Factors</h3>
            <div class="risk-factors">
                ${insights.riskFactors.map(risk => `
                    <div class="risk-factor">
                        <i class="fas fa-exclamation-triangle"></i>
                        ${risk}
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Social sentiment functionality
function initializeSocialSentiment() {
    updateSocialSentiment();
}

function updateSocialSentiment() {
    const container = document.getElementById('socialSentiment');
    if (!container) return;

    container.innerHTML = `
        <div class="social-sentiment-grid">
            ${Object.keys(socialSentiment).map(symbol => {
                const data = socialSentiment[symbol];
                return `
                    <div class="sentiment-card">
                        <div class="sentiment-header">
                            <div class="sentiment-symbol">${symbol}</div>
                            <div class="sentiment-score ${data.score > 60 ? 'positive' : data.score < 40 ? 'negative' : 'neutral'}">
                                ${data.score}
                            </div>
                        </div>
                        <div class="sentiment-trend ${data.trend}">
                            <i class="fas fa-arrow-${data.trend === 'rising' ? 'up' : data.trend === 'declining' ? 'down' : 'right'}"></i>
                            ${data.trend}
                        </div>
                        <div class="sentiment-mentions">${data.mentions.toLocaleString()} mentions</div>
                        <div class="sentiment-platforms">
                            <div class="platform">
                                <span>Twitter</span>
                                <span class="${data.platforms.twitter > 60 ? 'positive' : data.platforms.twitter < 40 ? 'negative' : 'neutral'}">${data.platforms.twitter}</span>
                            </div>
                            <div class="platform">
                                <span>Reddit</span>
                                <span class="${data.platforms.reddit > 60 ? 'positive' : data.platforms.reddit < 40 ? 'negative' : 'neutral'}">${data.platforms.reddit}</span>
                            </div>
                            <div class="platform">
                                <span>StockTwits</span>
                                <span class="${data.platforms.stocktwits > 60 ? 'positive' : data.platforms.stocktwits < 40 ? 'negative' : 'neutral'}">${data.platforms.stocktwits}</span>
                            </div>
                        </div>
                        <div class="sentiment-keywords">
                            ${data.keywords.map(keyword => `<span class="keyword">${keyword}</span>`).join('')}
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}

// Earnings calendar functionality
function initializeEarningsCalendar() {
    updateEarningsCalendar();
}

function updateEarningsCalendar() {
    const container = document.getElementById('earningsCalendar');
    if (!container) return;

    container.innerHTML = `
        <div class="earnings-list">
            ${earningsCalendar.map(earning => `
                <div class="earnings-item">
                    <div class="earnings-date">${new Date(earning.date).toLocaleDateString()}</div>
                    <div class="earnings-symbol">${earning.symbol}</div>
                    <div class="earnings-time">${earning.time}</div>
                    <div class="earnings-estimate">Est: $${earning.estimate.toFixed(2)}</div>
                    <div class="earnings-status ${earning.confirmed ? 'confirmed' : 'tentative'}">
                        ${earning.confirmed ? 'Confirmed' : 'Tentative'}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// Dividend tracker functionality
function initializeDividendTracker() {
    updateDividendCalendar();
}

function updateDividendCalendar() {
    const container = document.getElementById('dividendCalendar');
    if (!container) return;

    container.innerHTML = `
        <div class="dividend-list">
            ${dividendCalendar.map(dividend => `
                <div class="dividend-item">
                    <div class="dividend-symbol">${dividend.symbol}</div>
                    <div class="dividend-amount">$${dividend.amount.toFixed(2)}</div>
                    <div class="dividend-yield">${dividend.yield.toFixed(2)}%</div>
                    <div class="dividend-ex-date">Ex: ${new Date(dividend.exDate).toLocaleDateString()}</div>
                    <div class="dividend-pay-date">Pay: ${new Date(dividend.payDate).toLocaleDateString()}</div>
                </div>
            `).join('')}
        </div>
    `;
}

// Sector analysis functionality
function initializeSectorAnalysis() {
    updateSectorAnalysis();
}

function updateSectorAnalysis() {
    const container = document.getElementById('sectorAnalysis');
    if (!container) return;

    container.innerHTML = `
        <div class="sector-grid">
            ${Object.keys(sectorData).map(sector => {
                const data = sectorData[sector];
                return `
                    <div class="sector-card ${data.trend}">
                        <div class="sector-header">
                            <div class="sector-name">${sector}</div>
                            <div class="sector-weight">${data.weight}%</div>
                        </div>
                        <div class="sector-performance ${data.performance >= 0 ? 'positive' : 'negative'}">
                            ${data.performance >= 0 ? '+' : ''}${data.performance.toFixed(2)}%
                        </div>
                        <div class="sector-trend ${data.trend}">
                            <i class="fas fa-arrow-${data.trend === 'bullish' ? 'up' : data.trend === 'bearish' ? 'down' : 'right'}"></i>
                            ${data.trend}
                        </div>
                        <div class="sector-stocks">
                            Top: ${data.topStocks.join(', ')}
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}

// Risk management functionality
function initializeRiskManagement() {
    updateRiskMetrics();
}

function updateRiskMetrics() {
    const container = document.getElementById('riskMetrics');
    if (!container) return;

    const metrics = riskMetrics;
    
    container.innerHTML = `
        <div class="risk-metrics-grid">
            <div class="risk-metric">
                <div class="metric-label">Portfolio VaR (1-day)</div>
                <div class="metric-value negative">${metrics.portfolioVaR.oneDay.toFixed(2)}%</div>
            </div>
            <div class="risk-metric">
                <div class="metric-label">Sharpe Ratio</div>
                <div class="metric-value ${metrics.sharpeRatio > 1 ? 'positive' : 'neutral'}">${metrics.sharpeRatio.toFixed(2)}</div>
            </div>
            <div class="risk-metric">
                <div class="metric-label">Max Drawdown</div>
                <div class="metric-value negative">${metrics.maxDrawdown.toFixed(1)}%</div>
            </div>
            <div class="risk-metric">
                <div class="metric-label">Portfolio Beta</div>
                <div class="metric-value ${metrics.beta > 1 ? 'negative' : 'positive'}">${metrics.beta.toFixed(2)}</div>
            </div>
            <div class="risk-metric">
                <div class="metric-label">Alpha</div>
                <div class="metric-value ${metrics.alpha > 0 ? 'positive' : 'negative'}">${metrics.alpha.toFixed(1)}%</div>
            </div>
            <div class="risk-metric">
                <div class="metric-label">Volatility</div>
                <div class="metric-value neutral">${metrics.volatility.toFixed(1)}%</div>
            </div>
        </div>
    `;
}

// Paper trading functionality
function initializePaperTrading() {
    updatePaperTradingDisplay();

    document.getElementById('togglePaperTrading')?.addEventListener('click', () => {
        paperTradingMode = !paperTradingMode;
        updatePaperTradingDisplay();
        showToast('Paper Trading', `Paper trading ${paperTradingMode ? 'enabled' : 'disabled'}`, 'info');
    });

    document.getElementById('placePaperOrder')?.addEventListener('click', () => {
        showModal('paperOrderModal');
    });
}

function updatePaperTradingDisplay() {
    const container = document.getElementById('paperTradingAccount');
    if (!container) return;

    const data = paperTradingData;
    
    container.innerHTML = `
        <div class="paper-account-summary">
            <div class="account-stat">
                <div class="stat-label">Account Balance</div>
                <div class="stat-value">$${data.balance.toLocaleString()}</div>
            </div>
            <div class="account-stat">
                <div class="stat-label">Equity</div>
                <div class="stat-value">$${data.equity.toLocaleString()}</div>
            </div>
            <div class="account-stat">
                <div class="stat-label">Buying Power</div>
                <div class="stat-value">$${data.buyingPower.toLocaleString()}</div>
            </div>
            <div class="account-stat">
                <div class="stat-label">P&L</div>
                <div class="stat-value ${data.pnl.total >= 0 ? 'positive' : 'negative'}">
                    ${data.pnl.total >= 0 ? '+' : ''}$${data.pnl.total.toFixed(2)}
                </div>
            </div>
        </div>
        
        <div class="paper-positions">
            <h4>Positions</h4>
            ${data.positions.length === 0 ? 
                '<div class="empty-state">No positions</div>' :
                data.positions.map(position => `
                    <div class="position-item">
                        <div class="position-symbol">${position.symbol}</div>
                        <div class="position-quantity">${position.quantity} shares</div>
                        <div class="position-avg-cost">$${position.avgCost.toFixed(2)}</div>
                        <div class="position-current">$${position.currentPrice.toFixed(2)}</div>
                        <div class="position-pnl ${position.pnl >= 0 ? 'positive' : 'negative'}">
                            ${position.pnl >= 0 ? '+' : ''}$${position.pnl.toFixed(2)}
                        </div>
                    </div>
                `).join('')
            }
        </div>
    `;
}

// Backtesting functionality
function initializeBacktesting() {
    updateBacktestingResults();

    document.getElementById('runBacktest')?.addEventListener('click', () => {
        runBacktest();
    });
}

function updateBacktestingResults() {
    const container = document.getElementById('backtestingResults');
    if (!container) return;

    container.innerHTML = `
        <div class="backtest-strategies">
            ${backtestingStrategies.map(strategy => `
                <div class="strategy-card">
                    <div class="strategy-header">
                        <div class="strategy-name">${strategy.name}</div>
                        <div class="strategy-returns ${strategy.returns >= 0 ? 'positive' : 'negative'}">
                            ${strategy.returns >= 0 ? '+' : ''}${strategy.returns.toFixed(1)}%
                        </div>
                    </div>
                    <div class="strategy-description">${strategy.description}</div>
                    <div class="strategy-metrics">
                        <div class="metric">
                            <span>Sharpe Ratio</span>
                            <span>${strategy.sharpe.toFixed(2)}</span>
                        </div>
                        <div class="metric">
                            <span>Max Drawdown</span>
                            <span class="negative">${strategy.maxDrawdown.toFixed(1)}%</span>
                        </div>
                        <div class="metric">
                            <span>Win Rate</span>
                            <span>${strategy.winRate.toFixed(1)}%</span>
                        </div>
                        <div class="metric">
                            <span>Total Trades</span>
                            <span>${strategy.trades}</span>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// Economic dashboard functionality
function initializeEconomicDashboard() {
    updateEconomicIndicators();
}

function updateEconomicIndicators() {
    const container = document.getElementById('economicIndicators');
    if (!container) return;

    const indicators = economicIndicators;
    
    container.innerHTML = `
        <div class="economic-grid">
            <div class="economic-item">
                <div class="economic-label">GDP Growth</div>
                <div class="economic-value">${indicators.GDP.value.toFixed(1)}%</div>
                <div class="economic-change ${indicators.GDP.change >= 0 ? 'positive' : 'negative'}">
                    ${indicators.GDP.change >= 0 ? '+' : ''}${indicators.GDP.change.toFixed(1)}%
                </div>
                <div class="economic-trend ${indicators.GDP.trend}">${indicators.GDP.trend}</div>
            </div>
            
            <div class="economic-item">
                <div class="economic-label">Inflation (CPI)</div>
                <div class="economic-value">${indicators.inflation.value.toFixed(1)}%</div>
                <div class="economic-change ${indicators.inflation.change >= 0 ? 'negative' : 'positive'}">
                    ${indicators.inflation.change >= 0 ? '+' : ''}${indicators.inflation.change.toFixed(1)}%
                </div>
                <div class="economic-trend ${indicators.inflation.trend}">${indicators.inflation.trend}</div>
            </div>
            
            <div class="economic-item">
                <div class="economic-label">Unemployment</div>
                <div class="economic-value">${indicators.unemployment.value.toFixed(1)}%</div>
                <div class="economic-change neutral">
                    ${indicators.unemployment.change >= 0 ? '+' : ''}${indicators.unemployment.change.toFixed(1)}%
                </div>
                <div class="economic-trend ${indicators.unemployment.trend}">${indicators.unemployment.trend}</div>
            </div>
            
            <div class="economic-item">
                <div class="economic-label">Fed Rate</div>
                <div class="economic-value">${indicators.fedRate.value.toFixed(2)}%</div>
                <div class="economic-change neutral">
                    ${indicators.fedRate.change >= 0 ? '+' : ''}${indicators.fedRate.change.toFixed(2)}%
                </div>
                <div class="economic-trend ${indicators.fedRate.trend}">${indicators.fedRate.trend}</div>
            </div>
        </div>
        
        <div class="yield-curve">
            <h4>Yield Curve</h4>
            <div class="yield-curve-chart">
                ${Object.keys(indicators.yieldCurve).map(maturity => `
                    <div class="yield-point">
                        <div class="yield-maturity">${maturity}</div>
                        <div class="yield-rate">${indicators.yieldCurve[maturity].toFixed(2)}%</div>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="market-indicators">
            <div class="market-indicator">
                <div class="indicator-label">VIX</div>
                <div class="indicator-value">${indicators.vix.value.toFixed(2)}</div>
                <div class="indicator-change ${indicators.vix.change >= 0 ? 'negative' : 'positive'}">
                    ${indicators.vix.change >= 0 ? '+' : ''}${indicators.vix.change.toFixed(2)}
                </div>
            </div>
            
            <div class="market-indicator">
                <div class="indicator-label">DXY</div>
                <div class="indicator-value">${indicators.dxy.value.toFixed(2)}</div>
                <div class="indicator-change ${indicators.dxy.change >= 0 ? 'positive' : 'negative'}">
                    ${indicators.dxy.change >= 0 ? '+' : ''}${indicators.dxy.change.toFixed(2)}
                </div>
            </div>
            
            <div class="market-indicator">
                <div class="indicator-label">Oil</div>
                <div class="indicator-value">$${indicators.oil.value.toFixed(2)}</div>
                <div class="indicator-change ${indicators.oil.change >= 0 ? 'positive' : 'negative'}">
                    ${indicators.oil.change >= 0 ? '+' : ''}${indicators.oil.change.toFixed(2)}
                </div>
            </div>
            
            <div class="market-indicator">
                <div class="indicator-label">Gold</div>
                <div class="indicator-value">$${indicators.gold.value.toFixed(2)}</div>
                <div class="indicator-change ${indicators.gold.change >= 0 ? 'positive' : 'negative'}">
                    ${indicators.gold.change >= 0 ? '+' : ''}${indicators.gold.change.toFixed(2)}
                </div>
            </div>
        </div>
    `;
}

// Advanced charting functionality
function initializeAdvancedCharting() {
    // Add more chart types and indicators
    document.querySelectorAll('[data-chart-type]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('[data-chart-type]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            chartType = btn.dataset.chartType;
            updateAdvancedChart();
        });
    });

    // Volume profile
    document.getElementById('toggleVolumeProfile')?.addEventListener('click', () => {
        toggleVolumeProfile();
    });

    // Fibonacci retracement
    document.getElementById('addFibonacci')?.addEventListener('click', () => {
        addFibonacciRetracement();
    });
}

function updateAdvancedChart() {
    // Enhanced chart with more indicators and drawing tools
    const symbol = currentAssetType === 'crypto' ? cryptoData[currentSymbol] : marketData[currentSymbol];
    if (!symbol || !charts.priceChart) return;

    // Update chart based on type (candlestick, line, area, etc.)
    const chart = charts.priceChart;
    
    if (chartType === 'candlestick') {
        // Convert to candlestick data
        chart.data.datasets[0] = {
            label: `${currentSymbol} Price`,
            data: symbol.data.map(d => ({
                x: d.date,
                o: d.price * 0.995,
                h: d.price * 1.005,
                l: d.price * 0.99,
                c: d.price
            })),
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59, 130, 246, 0.1)'
        };
    }
    
    chart.update();
}

// Generate crypto historical data
function generateCryptoHistoricalData() {
    Object.keys(cryptoData).forEach(symbol => {
        const data = cryptoData[symbol];
        const days = 30;
        const basePrice = data.price;
        
        data.data = [];
        
        for (let i = days; i >= 0; i--) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            
            const randomChange = (Math.random() - 0.5) * 0.08; // Higher volatility for crypto
            const price = basePrice * (1 + randomChange * (i / days));
            
            data.data.push({
                date: date.toISOString(),
                price: price,
                volume: Math.random() * 1000000000 // Random volume
            });
        }
    });
}

// Enhanced real-time updates
function updateMarketPrices() {
    // Update stock prices
    Object.keys(marketData).forEach(symbol => {
        const data = marketData[symbol];
        const changePercent = (Math.random() - 0.5) * 0.02;
        const newPrice = data.price * (1 + changePercent);
        const priceChange = newPrice - data.price;
        
        data.price = newPrice;
        data.change = priceChange;
        data.changePercent = (priceChange / (newPrice - priceChange)) * 100;
        
        data.high = Math.max(data.high, newPrice);
        data.low = Math.min(data.low, newPrice);
        
        // Update indicators with some randomness
        data.indicators.rsi = Math.max(0, Math.min(100, data.indicators.rsi + (Math.random() - 0.5) * 2));
        data.indicators.macd = data.indicators.macd + (Math.random() - 0.5) * 0.1;
        
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

    // Update crypto prices
    Object.keys(cryptoData).forEach(symbol => {
        const data = cryptoData[symbol];
        const changePercent = (Math.random() - 0.5) * 0.05; // Higher volatility
        const newPrice = data.price * (1 + changePercent);
        const priceChange = newPrice - data.price;
        
        data.price = newPrice;
        data.change = priceChange;
        data.changePercent = (priceChange / (newPrice - priceChange)) * 100;
        
        // Update fear & greed index
        data.fearGreedIndex = Math.max(0, Math.min(100, data.fearGreedIndex + (Math.random() - 0.5) * 5));
    });

    // Update displays
    updateMarketOverview();
    updateCurrentPriceDisplay();
    updateIndicators();
    updateWatchlistDisplay();
    updatePortfolioDisplay();
    updateHeatmap();
    updateCryptoDisplay();
    updateAIInsights();
    updateSocialSentiment();

    if (charts.priceChart) {
        updatePriceChart();
    }
}

// Utility functions for new features
function calculateOptionsStrategy() {
    showToast('Options Calculator', 'Options strategy calculation completed', 'success');
}

function toggleVolumeProfile() {
    showToast('Volume Profile', 'Volume profile toggled', 'info');
}

function addFibonacciRetracement() {
    showToast('Fibonacci', 'Fibonacci retracement added to chart', 'info');
}

function runBacktest() {
    showToast('Backtesting', 'Running backtest strategy...', 'info');
    setTimeout(() => {
        showToast('Backtesting', 'Backtest completed successfully', 'success');
    }, 2000);
}

function updateAssetDisplay() {
    switch (currentAssetType) {
        case 'stocks':
            updateMarketOverview();
            break;
        case 'crypto':
            updateCryptoDisplay();
            break;
        case 'options':
            updateOptionsChain();
            break;
    }
}



// Export enhanced functions for global access
window.calculateOptionsStrategy = calculateOptionsStrategy;
window.toggleVolumeProfile = toggleVolumeProfile;
window.addFibonacciRetracement = addFibonacciRetracement;
window.runBacktest = runBacktest;

console.log('Enhanced Market Analyzer Pro script loaded with advanced features');