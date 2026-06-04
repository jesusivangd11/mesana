// ===================== CONSTANTS =====================
const STORAGE_KEY = 'mesana-pos-state-v2';
const DEFAULT_TAX_RATE = 16;

const THEMES = [
  { key: 'theme-sage', color: '#6B8F71', label: 'Sage' },
  { key: 'theme-slate', color: '#5A7A9A', label: 'Slate' },
  { key: 'theme-terracota', color: '#9A6050', label: 'Terracota' },
  { key: 'theme-dusk', color: '#7A6A9A', label: 'Dusk' },
  { key: 'theme-gold', color: '#9A7A30', label: 'Gold' },
  { key: 'theme-steel', color: '#5A6A7A', label: 'Steel' },
];

const MESAS = ['Mesa 1', 'Mesa 2', 'Mesa 3'];

const CAT_ICONS = {
  'Platos Fuertes': `<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v7a2 2 0 002 2h2a2 2 0 002-2V2"/><path d="M6 2v20"/><path d="M19 2a4 4 0 00-4 4v6a2 2 0 002 2h2"/><path d="M19 14v8"/></svg>`,
  'Bebidas': `<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11h6"/><path d="M12 11v8"/><path d="M8 22h8"/><path d="M7 11h10v-1a5 5 0 00-10 0v1z"/><path d="M19 6a2 2 0 100-4 2 2 0 000 4z"/></svg>`,
  'Postres': `<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 13h12v7a1 1 0 01-1 1H7a1 1 0 01-1-1v-7z"/><path d="M6 13c0-2 1-3 3-3 1 0 2 .5 3 2 1-1.5 2-2 3-2 2 0 3 1 3 3"/><path d="M12 5l1.5 2-1.5 1L10.5 7z"/></svg>`,
  'Entradas': `<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0018 0H3z"/><path d="M5 16h14"/><path d="M14 8c0-1 1-1 1-2.5C15 4 14 3.5 14 3"/><path d="M11 8c0-1 1-1 1-2.5C12 4 11 3.5 11 3"/></svg>`,
  'Especialidades': `<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 13.87A4 4 0 017.4 6a5 5 0 019.2 0 4 4 0 011.4 7.87"/><path d="M6 13v5a1 1 0 001 1h10a1 1 0 001-1v-5"/></svg>`,
};

const DEFAULT_ICON = `<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8.5 14a3.5 3.5 0 007 0"/><circle cx="9" cy="10" r="0.5" fill="currentColor"/><circle cx="15" cy="10" r="0.5" fill="currentColor"/></svg>`;

const NAVICONS = {
  pos: `<svg class="ni-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path stroke-linecap="round" d="M8 21h8M12 17v4"/></svg>`,
  comandas: `<svg class="ni-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2M9 12h6M9 16h4"/></svg>`,
  products: `<svg class="ni-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>`,
  inventory: `<svg class="ni-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>`,
  users: `<svg class="ni-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
  dashboard: `<svg class="ni-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>`,
  finances: `<svg class="ni-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
  sales: `<svg class="ni-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/></svg>`,
  settings: `<svg class="ni-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><circle cx="12" cy="12" r="3"/></svg>`,
};

const NAV_OWNER = [
  { sec: 'VENTAS' },
  { id: 'pos', label: 'Punto de Venta' },
  { id: 'comandas', label: 'Comandas', badge: true },
  { sec: 'ADMINISTRACION' },
  { id: 'products', label: 'Productos' },
  { id: 'categories', label: 'Categorías' },
  { id: 'combos', label: 'Combos' },
  { id: 'inventory', label: 'Inventario' },
  { id: 'users', label: 'Usuarios' },
  { sec: 'FINANZAS' },
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'finances', label: 'Finanzas' },
  { id: 'sales', label: 'Ventas' },
  { sec: 'SISTEMA' },
  { id: 'settings', label: 'Configuracion' },
];

const NAV_EMP = [
  { sec: 'VENTAS' },
  { id: 'pos', label: 'Punto de Venta' },
  { id: 'comandas', label: 'Comandas', badge: true },
  { id: 'settings', label: 'Configuracion' },
];

const PAGE_TITLES = {
  pos: 'Punto de Venta',
  comandas: 'Comandas en Espera',
  products: 'Gestion de Productos',
  categories: 'Gestión de Categorías',
  combos: 'Gestión de Combos',
  inventory: 'Control de Inventario',
  users: 'Usuarios',
  dashboard: 'Dashboard',
  finances: 'Finanzas',
  sales: 'Reporte de Ventas',
  settings: 'Configuracion',
};

const MONTADO_FILLINGS = [
  'Prensado',
  'Chicharron en salsa verde',
  'Discada',
  'Chile beans',
  'Costilla verde',
  'Bistec',
  'Asado',
  'Chile pasado',
];

// ===================== STATE =====================
let state = createDefaultState();
let currentUser = null;
let currentOrder = createEmptyOrder();
let posCategory = 'Todos';
let productSearch = '';
let editingComandaId = null;
let pendingAddId = null;
let pendingAddIsCombo = false;
let pendingDeleteEmail = null;
let salesSelectedDate = '';
let salesSelectedId = null;
let salesSearchTerm = '';
let salesTab = 'sales';
let salesMovements = [];
let movementsSelectedTicket = null;
let clockTimer = null;
let productConfigContext = null;

// ===================== DATA =====================
function createDefaultProducts() {
  return [];
}

function createDefaultEmployees() {
  return [];
}

function createDefaultSalesRecords() {
  return [];
}

function createDefaultCommandas() {
  return [];
}

function buildSaleRecordFromSeed(id, completedAtMs, mesa, type, waiter, items) {
  const totals = calculateTotals(items, DEFAULT_TAX_RATE);
  const completedAt = new Date(completedAtMs).toISOString();
  return {
    id,
    createdAt: completedAt,
    completedAt,
    type,
    mesa,
    comensales: type === 'llevar' ? 1 : 2,
    waiter,
    notes: '',
    paymentMethod: 'Efectivo',
    status: 'Pagado',
    items: clone(items),
    subtotal: totals.subtotal,
    tax: totals.tax,
    total: totals.total,
    cost: totals.cost,
  };
}

function buildCommandaSeed(id, createdAtMs, mesa, type, waiter, comensales, notes, items) {
  return {
    id,
    createdAt: new Date(createdAtMs).toISOString(),
    updatedAt: new Date(createdAtMs).toISOString(),
    type,
    mesa,
    comensales,
    notes,
    waiter,
    items: clone(items),
  };
}

function createDefaultState() {
  return {
    owner: {
      name: 'Jesus Garcia',
      email: 'admin@mesana.mx',
      pass: 'admin123',
      label: 'Propietario',
    },
    employees: createDefaultEmployees(),
    products: createDefaultProducts(),
    commandas: createDefaultCommandas(),
    parkedOrders: [],
    salesRecords: createDefaultSalesRecords(),
    categories: [
      { id: 1, name: 'Platos Fuertes' },
      { id: 2, name: 'Bebidas' },
      { id: 3, name: 'Postres' },
      { id: 4, name: 'Entradas' }
    ],
    combos: [],
    settings: {
      restaurantName: 'Mesana',
      rfc: 'XAXX010101000',
      address: 'Av. Principal #100, Chihuahua, Chih.',
      phone: '',
      logoDataUrl: '',
      ticketFooter: 'Gracias por su preferencia',
      currency: 'MXN - Peso Mexicano',
      kitchenPrinter: '192.168.1.101:9100',
      cashPrinter: '192.168.1.102:9100',
      theme: 'theme-sage',
      dailyOrderCounter: 0,
      lastOrderDate: '',
    },
  };
}

function createEmptyOrder() {
  return {
    items: [],
    type: null,
    mesa: 'Mesa 1',
    comensales: 2,
    notes: '',
  };
}

function resetOrder() {
  editingComandaId = null;
  currentOrder = createEmptyOrder();
}

// ===================== API =====================
async function loadDataFromAPI() {
  try {
    const [productsRes, ordersRes, salesRes, usersRes, settingsRes, categoriesRes, combosRes, parkedRes] = await Promise.all([
      fetch('/api/products'),
      fetch('/api/orders'),
      fetch('/api/sales'),
      fetch('/api/users'),
      fetch('/api/settings'),
      fetch('/api/categories'),
      fetch('/api/combos'),
      fetch('/api/parked')
    ]);
    state.products = await productsRes.json();
    state.commandas = await ordersRes.json();
    state.salesRecords = await salesRes.json();
    const users = await usersRes.json();
    state.owner = users.find(u => u.role === 'Propietario') || {};
    state.employees = users.filter(u => u.role !== 'Propietario');
    state.settings = await settingsRes.json();
    state.categories = await categoriesRes.json();
    state.combos = await combosRes.json();
    try { state.parkedOrders = parkedRes.ok ? await parkedRes.json() : []; } catch { state.parkedOrders = []; }
    // Check and reset daily counter if new day
    const today = new Date().toISOString().split('T')[0];
    if (state.settings.lastOrderDate !== today) {
      state.settings.dailyOrderCounter = 0;
      state.settings.lastOrderDate = today;
      // Save updated settings
      await fetch('/api/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(state.settings)
      });
    }
  } catch (error) {
    console.error('Error loading data from API:', error);
    // Fallback to defaults if API fails
    state = createDefaultState();
  }
}

// ===================== STORAGE =====================
function loadState() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return normalizeState(JSON.parse(stored));
    }
  } catch (error) {
    console.warn('No se pudo leer el estado guardado.', error);
  }
  return normalizeState(migrateLegacyState());
}

function migrateLegacyState() {
  const next = createDefaultState();
  try {
    const legacyName = localStorage.getItem('restaurantName');
    const legacyEmployees = JSON.parse(localStorage.getItem('customEmployees') || '[]');
    const legacyPasswords = JSON.parse(localStorage.getItem('customPasswords') || '{}');

    if (legacyName) next.settings.restaurantName = legacyName;

    if (Array.isArray(legacyEmployees) && legacyEmployees.length) {
      next.employees = legacyEmployees.map((employee, index) => ({
        name: employee.name || `Empleado ${index + 1}`,
        email: employee.email || `empleado${index + 1}@mesana.mx`,
        role: employee.role || 'Mesero',
        status: employee.status || 'Activo',
        since: employee.since || formatDateISO(new Date()),
        pass: legacyPasswords[employee.email] || employee.pass || 'emp123',
        isDefault: false,
      }));
    }

    if (legacyPasswords['admin@mesana.mx']) {
      next.owner.pass = legacyPasswords['admin@mesana.mx'];
    }
  } catch (error) {
    console.warn('No se pudo migrar el estado anterior.', error);
  }
  return next;
}

function normalizeState(raw) {
  const base = createDefaultState();
  const safe = raw && typeof raw === 'object' ? raw : {};
  return {
    owner: {
      ...base.owner,
      ...(safe.owner || {}),
    },
    employees: normalizeEmployees(safe.employees || base.employees),
    products: normalizeProducts(safe.products || base.products),
    commandas: normalizeCommandas(safe.commandas || base.commandas),
    salesRecords: normalizeSalesRecords(safe.salesRecords || base.salesRecords),
    settings: {
      ...base.settings,
      ...(safe.settings || {}),
    },
  };
}

function normalizeEmployees(items) {
  return (Array.isArray(items) ? items : []).map((employee, index) => ({
    name: employee.name || `Empleado ${index + 1}`,
    email: employee.email || `empleado${index + 1}@mesana.mx`,
    role: employee.role || 'Mesero',
    status: employee.status || 'Activo',
    since: employee.since || formatDateISO(new Date()),
    pass: employee.pass || 'emp123',
    isDefault: Boolean(employee.isDefault),
  }));
}

function normalizeProducts(items) {
  return (Array.isArray(items) ? items : []).map((product, index) => ({
    id: Number.isFinite(Number(product.id)) ? Number(product.id) : Date.now() + index,
    name: product.name || `Producto ${index + 1}`,
    cat: product.cat || 'Platos Fuertes',
    price: toMoney(product.price),
    cost: toMoney(product.cost),
    stock: toInt(product.stock),
  }));
}

function normalizeCommandas(items) {
  return (Array.isArray(items) ? items : []).map((comanda, index) => ({
    id: Number.isFinite(Number(comanda.id)) ? Number(comanda.id) : Date.now() + index,
    createdAt: comanda.createdAt || new Date().toISOString(),
    updatedAt: comanda.updatedAt || comanda.createdAt || new Date().toISOString(),
    type: comanda.type === 'llevar' ? 'llevar' : 'comedor',
    mesa: comanda.mesa || 'Mesa 1',
    comensales: Math.max(1, toInt(comanda.comensales || 1)),
    notes: comanda.notes || '',
    waiter: comanda.waiter || 'Sin asignar',
    items: normalizeProductsInOrder(comanda.items),
  }));
}

function normalizeSalesRecords(items) {
  return (Array.isArray(items) ? items : []).map((sale, index) => {
    const normalizedItems = normalizeProductsInOrder(sale.items);
    const totals = calculateTotals(normalizedItems, 0);
    return {
      id: Number.isFinite(Number(sale.id)) ? Number(sale.id) : Date.now() + index,
      createdAt: sale.createdAt || sale.completedAt || new Date().toISOString(),
      completedAt: sale.completedAt || sale.createdAt || new Date().toISOString(),
      type: sale.type === 'llevar' ? 'llevar' : 'comedor',
      mesa: sale.mesa || 'Mostrador',
      comensales: Math.max(1, toInt(sale.comensales || 1)),
      notes: sale.notes || '',
      waiter: sale.waiter || 'Sin asignar',
      paymentMethod: sale.paymentMethod || 'Efectivo',
      status: sale.status || 'Pagado',
      items: normalizedItems,
      subtotal: toMoney(sale.subtotal || totals.subtotal),
      tax: 0,
      total: toMoney(sale.subtotal || totals.subtotal),
      cost: toMoney(sale.cost || totals.cost),
    };
  });
}

function normalizeProductsInOrder(items) {
  return (Array.isArray(items) ? items : []).map((item) => ({
    uid: item.uid || createItemUid(),
    id: Number(item.id),
    name: item.name || 'Producto',
    cat: item.cat || 'Platos Fuertes',
    qty: Math.max(1, toInt(item.qty || 1)),
    price: toMoney(item.price),
    cost: toMoney(item.cost),
    notes: item.notes || '',
    variantLabel: item.variantLabel || '',
    variantKey: item.variantKey || '',
  }));
}



// ===================== HELPERS =====================
function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function esc(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function jsv(value) {
  return JSON.stringify(String(value ?? '')).replace(/</g, '\\u003c');
}

function fmt(number) {
  return Number(number || 0).toLocaleString('es-MX', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function toMoney(value) {
  return Number(Number(value || 0).toFixed(2));
}

function toInt(value) {
  return Math.max(0, parseInt(value, 10) || 0);
}

function clampTax(value) {
  const num = Number(value);
  if (!Number.isFinite(num)) return DEFAULT_TAX_RATE;
  return Math.min(100, Math.max(0, num));
}

function formatDateISO(date) {
  return new Date(date).toISOString().slice(0, 10);
}

function formatDateTime(dateValue) {
  return new Date(dateValue).toLocaleString('es-MX', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function formatShortDate(dateValue) {
  return new Date(dateValue).toLocaleDateString('es-MX');
}

function formatTime(dateValue) {
  return new Date(dateValue).toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' });
}

function toLocalDateStr(dateValue) {
  const d = new Date(dateValue);
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function getSalesByDate(dateStr) {
  return state.salesRecords
    .filter(s => toLocalDateStr(s.completedAt) === dateStr)
    .sort((a, b) => new Date(b.completedAt) - new Date(a.completedAt));
}

function formatShortTime(dateValue) {
  return new Date(dateValue).toLocaleTimeString('es-MX', {
    hour: '2-digit',
    minute: '2-digit',
  });
}

function getBrandMarkSvg(size, strokeWidth) {
  return `<svg width="${size}" height="${size}" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9.5" stroke="#fff" stroke-width="1.3" opacity="0.45"/><path d="M6.5 16.5V8L12 13.5L17.5 8V16.5" stroke="#fff" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="4.8" r="1.05" fill="#fff"/></svg>`;
}

function renderBrandMarkMarkup(size) {
  const logo = state.settings.logoDataUrl;
  if (logo) {
    return `<img src="${logo}" alt="Logo del restaurante" style="width:${size}px;height:${size}px;object-fit:cover;border-radius:10px;display:block">`;
  }
  return getBrandMarkSvg(size, size <= 22 ? '2.2' : '2');
}

function renderTicketLogoMarkup() {
  if (!state.settings.logoDataUrl) return '';
  return `<div style="text-align:center;margin-bottom:8px"><img src="${state.settings.logoDataUrl}" alt="Logo" style="width:58px;height:58px;object-fit:cover;border-radius:10px"></div>`;
}

function createItemUid() {
  return `item-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function normalizeText(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

function isMontadoProduct(product) {
  const normalized = normalizeText(product?.name);
  return normalized === 'montado' || normalized.startsWith('montado ');
}

function minutesAgo(dateValue) {
  const minutes = Math.max(1, Math.floor((Date.now() - new Date(dateValue).getTime()) / 60000));
  return `${minutes} min`;
}

function calculateTotals(items, explicitTaxRate) {
  const subtotal = items.reduce((sum, item) => sum + toMoney(item.price) * toInt(item.qty), 0);
  const cost = items.reduce((sum, item) => sum + toMoney(item.cost) * toInt(item.qty), 0);
  return {
    subtotal: toMoney(subtotal),
    tax: 0,
    total: toMoney(subtotal),
    cost: toMoney(cost),
  };
}

function productById(id) {
  return state.products.find((product) => product.id === Number(id));
}

function getEmployeeByEmail(email) {
  return state.employees.find((employee) => employee.email.toLowerCase() === String(email).toLowerCase());
}

function getAccountByEmail(email) {
  const normalized = String(email || '').trim().toLowerCase();
  if (normalized === state.owner.email.toLowerCase()) {
    return {
      email: state.owner.email,
      pass: state.owner.pass,
      role: 'owner',
      name: state.owner.name,
      label: state.owner.label,
    };
  }
  const employee = getEmployeeByEmail(normalized);
  if (!employee || employee.status !== 'Activo') return null;
  return {
    email: employee.email,
    pass: employee.pass,
    role: 'employee',
    name: employee.name,
    label: employee.role,
  };
}

function getCurrentActivePage() {
  const active = document.querySelector('.nav-item.active');
  return active ? active.id.replace('nav-', '') : 'pos';
}

function refreshCurrentPage() {
  const page = getCurrentActivePage();
  renderPage(page);
  if (page === 'comandas') updateBadge();
}

function createOrderItemSnapshot(product, qty) {
  return {
    uid: createItemUid(),
    id: product.id,
    name: product.name,
    cat: product.cat,
    qty,
    price: toMoney(product.price),
    cost: toMoney(product.cost),
    notes: '',
    variantLabel: '',
    variantKey: '',
  };
}

function getEditingComanda() {
  return state.commandas.find((comanda) => comanda.id === editingComandaId) || null;
}

function getEditingReservedQty(productId) {
  const editing = getEditingComanda();
  if (!editing) return 0;
  const item = editing.items.find((entry) => entry.id === Number(productId));
  return item ? item.qty : 0;
}

function getAvailableStock(productId) {
  const product = productById(productId);
  if (!product) return 0;
  return product.stock + getEditingReservedQty(productId);
}

function validateOrderStock(items) {
  const totalsByProduct = {};
  items.forEach(item => {
    if (item.isCombo) {
      item.comboItems.forEach(comboItem => {
        totalsByProduct[comboItem.id] = (totalsByProduct[comboItem.id] || 0) + comboItem.qty * item.qty;
      });
    } else {
      totalsByProduct[item.id] = (totalsByProduct[item.id] || 0) + item.qty;
    }
  });
  for (const [productId, qty] of Object.entries(totalsByProduct)) {
    const available = getAvailableStock(Number(productId));
    if (qty > available) {
      const product = productById(Number(productId));
      return {
        ok: false,
        message: `${product?.name || 'Producto'}: solo hay ${available} disponible(s).`,
      };
    }
  }
  return { ok: true };
}

function setProductsStockFromOrderDiff(previousItems, nextItems) {
  const previousTotals = previousItems.reduce((acc, item) => {
    acc[item.id] = (acc[item.id] || 0) + item.qty;
    return acc;
  }, {});
  const nextTotals = nextItems.reduce((acc, item) => {
    acc[item.id] = (acc[item.id] || 0) + item.qty;
    return acc;
  }, {});
  const allIds = new Set([...Object.keys(previousTotals), ...Object.keys(nextTotals)]);
  allIds.forEach((id) => {
    const previousQty = previousTotals[id] || 0;
    const nextQty = nextTotals[id] || 0;
    const difference = nextQty - previousQty;
    const product = productById(Number(id));
    if (!product || difference === 0) return;
    if (difference > 0) product.stock = Math.max(0, product.stock - difference);
    else product.stock += Math.abs(difference);
  });
}

function getTodayRange() {
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  const end = new Date(start);
  end.setDate(end.getDate() + 1);
  return { start, end };
}

function getCurrentWeekRange() {
  const end = new Date();
  end.setHours(23, 59, 59, 999);
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  start.setDate(start.getDate() - 6);
  return { start, end };
}

function getSalesInRange(range) {
  const target = range === 'today' ? getTodayRange() : getCurrentWeekRange();
  return state.salesRecords.filter((sale) => {
    const date = new Date(sale.completedAt);
    return date >= target.start && date <= target.end && sale.status === 'Pagado';
  });
}

function getSalesHistory() {
  const labels = [];
  const series = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  for (let offset = 6; offset >= 0; offset -= 1) {
    const day = new Date(today);
    day.setDate(today.getDate() - offset);
    const next = new Date(day);
    next.setDate(day.getDate() + 1);
    const daySales = state.salesRecords.filter((sale) => {
      const date = new Date(sale.completedAt);
      return sale.status === 'Pagado' && date >= day && date < next;
    });
    labels.push(day.toLocaleDateString('es-MX', { weekday: 'short' }));
    series.push({
      day: labels[labels.length - 1],
      revenue: toMoney(daySales.reduce((sum, sale) => sum + sale.total, 0)),
      orders: daySales.length,
    });
  }
  return series;
}

function getTopProducts(limit) {
  const map = new Map();
  state.salesRecords.forEach((sale) => {
    if (sale.status !== 'Pagado') return;
    sale.items.forEach((item) => {
      const entry = map.get(item.name) || {
        name: item.name,
        cat: item.cat,
        qty: 0,
        revenue: 0,
      };
      entry.qty += item.qty;
      entry.revenue += item.qty * item.price;
      map.set(item.name, entry);
    });
  });
  return [...map.values()]
    .sort((a, b) => b.qty - a.qty || b.revenue - a.revenue)
    .slice(0, limit);
}

function getTopVariants(limit) {
  const map = new Map();
  const addVariant = (name, variantLabel, qty, price) => {
    if (!variantLabel) return;
    const key = `${name} · ${variantLabel}`;
    const entry = map.get(key) || { label: key, name, variantLabel, qty: 0, revenue: 0 };
    entry.qty += qty;
    entry.revenue += qty * (price || 0);
    map.set(key, entry);
  };
  state.salesRecords.forEach((sale) => {
    if (sale.status !== 'Pagado') return;
    const items = Array.isArray(sale.items)
      ? sale.items
      : (typeof sale.items === 'string' ? (() => { try { return JSON.parse(sale.items); } catch { return []; } })() : []);
    items.forEach((item) => {
      addVariant(item.name, item.variantLabel, item.qty, item.price);
      if (item.isCombo && Array.isArray(item.comboItems)) {
        item.comboItems.forEach((ci) => addVariant(ci.name || '', ci.variantLabel, (ci.qty || 1) * (item.qty || 1), 0));
      }
    });
  });
  return [...map.values()]
    .sort((a, b) => b.qty - a.qty || b.revenue - a.revenue)
    .slice(0, limit);
}

function getCategorySalesBreakdown() {
  const totals = {};
  let grandTotal = 0;
  state.salesRecords.forEach((sale) => {
    if (sale.status !== 'Pagado') return;
    sale.items.forEach((item) => {
      const amount = item.qty * item.price;
      totals[item.cat] = (totals[item.cat] || 0) + amount;
      grandTotal += amount;
    });
  });
  return Object.entries(totals)
    .map(([category, amount]) => ({
      category,
      amount,
      pct: grandTotal ? Math.round((amount / grandTotal) * 100) : 0,
    }))
    .sort((a, b) => b.amount - a.amount);
}

function getSalesSummary(range) {
  const sales = getSalesInRange(range);
  const revenue = sales.reduce((sum, sale) => sum + sale.total, 0);
  const cost = sales.reduce((sum, sale) => sum + sale.cost, 0);
  return {
    sales,
    revenue: toMoney(revenue),
    cost: toMoney(cost),
    tax: 0,
    profit: toMoney(revenue - cost),
    orders: sales.length,
  };
}

function downloadTextFile(filename, content, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

// ===================== LOGIN =====================
function fillAccount(user, pass) {
  document.getElementById('loginUser').value = user;
  document.getElementById('loginPass').value = pass;
}

async function doLogin() {
  const email = document.getElementById('loginUser').value.trim();
  const pass = document.getElementById('loginPass').value.trim();
  const account = getAccountByEmail(email);
  if (!account || account.pass !== pass) {
    document.getElementById('loginErr').style.display = 'block';
    return;
  }
  document.getElementById('loginErr').style.display = 'none';
  currentUser = account;
  document.getElementById('loginScreen').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');
  await initApp();
}

document.addEventListener('keydown', (event) => {
  const loginScreen = document.getElementById('loginScreen');
  if (event.key === 'Enter' && loginScreen && !loginScreen.classList.contains('hidden')) {
    doLogin();
  }
});

function logout() {
  currentUser = null;
  resetOrder();
  document.getElementById('loginScreen').classList.remove('hidden');
  document.getElementById('app').classList.add('hidden');
  document.getElementById('loginUser').value = '';
  document.getElementById('loginPass').value = '';
  document.getElementById('loginErr').style.display = 'none';
}

// ===================== INIT =====================
async function initApp() {
  document.getElementById('sbUser').innerHTML = `<strong style="color:rgba(255,255,255,0.9)">${esc(currentUser.name)}</strong><br>${esc(currentUser.label)}`;
  syncBranding();
  buildNav();
  buildThemeSwitcher();
  await applyTheme(state.settings.theme || 'theme-sage', true);
  posCategory = 'Todos';
  productSearch = '';
  salesView = 'today';
  resetOrder();
  navigateTo('pos');
  startClock();
}

function syncBranding() {
  const restaurantName = state.settings.restaurantName || 'Mesana';
  document.getElementById('sbName').textContent = restaurantName;
  document.getElementById('brandName').textContent = restaurantName;
  const loginBrandMark = document.getElementById('loginBrandMark');
  const sidebarBrandMark = document.getElementById('sidebarBrandMark');
  if (loginBrandMark) loginBrandMark.innerHTML = renderBrandMarkMarkup(26);
  if (sidebarBrandMark) sidebarBrandMark.innerHTML = renderBrandMarkMarkup(20);
  document.getElementById('footerBrand').innerHTML = `by <span>ditto</span>`;
  document.getElementById('footerBrand2').innerHTML = `&copy; 2026 <span>${esc(restaurantName)}</span> — Punto de Venta para Restaurantes`;
}

function buildNav() {
  const nav = currentUser.role === 'owner' ? NAV_OWNER : NAV_EMP;
  const element = document.getElementById('sbNav');
  element.innerHTML = '';
  nav.forEach((item) => {
    if (item.sec) {
      element.innerHTML += `<div class="nav-sec">${esc(item.sec)}</div>`;
      return;
    }
    const badge = item.badge && state.commandas.length > 0
      ? `<span class="nav-badge" id="cmdBadge">${state.commandas.length}</span>`
      : '';
    element.innerHTML += `<div class="nav-item" id="nav-${item.id}" onclick="navigateTo('${item.id}')">
      ${NAVICONS[item.id] || ''}
      ${esc(item.label)}${badge}
    </div>`;
  });
}

function buildThemeSwitcher() {
  const container = document.getElementById('themeSwatch');
  container.innerHTML = '';
  THEMES.forEach((theme) => {
    const swatch = document.createElement('div');
    swatch.className = `t-swatch${theme.key === state.settings.theme ? ' active' : ''}`;
    swatch.style.background = theme.color;
    swatch.title = theme.label;
    swatch.onclick = () => applyTheme(theme.key);
    container.appendChild(swatch);
  });
}

async function applyTheme(key, silent) {
  const app = document.getElementById('app');
  THEMES.forEach((theme) => app.classList.remove(theme.key));
  app.classList.add(key);
  state.settings.theme = key;
  try {
    await fetch('/api/settings', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state.settings)
    });
  } catch (error) {
    console.error('Error saving theme:', error);
  }
  document.querySelectorAll('.t-swatch').forEach((swatch, index) => {
    swatch.classList.toggle('active', THEMES[index].key === key);
  });
  if (!silent) {
    const theme = THEMES.find((entry) => entry.key === key);
    showToast(`Tema aplicado: ${theme ? theme.label : key}`, 'success');
  }
}

function updateBadge() {
  const badge = document.getElementById('cmdBadge');
  if (badge) {
    if (state.commandas.length > 0) badge.textContent = state.commandas.length;
    else badge.remove();
    return;
  }
  if (state.commandas.length > 0) {
    const nav = document.getElementById('nav-comandas');
    if (nav) nav.innerHTML += `<span class="nav-badge" id="cmdBadge">${state.commandas.length}</span>`;
  }
}

function navigateTo(id) {
  document.querySelectorAll('.nav-item').forEach((item) => item.classList.remove('active'));
  const target = document.getElementById(`nav-${id}`);
  if (target) target.classList.add('active');
  document.getElementById('topbarTitle').textContent = PAGE_TITLES[id] || state.settings.restaurantName;
  const showSearch = ['pos', 'products', 'inventory'].includes(id);
  document.getElementById('gSearchBar').style.display = showSearch ? 'flex' : 'none';
  if (!showSearch) document.getElementById('gSearch').value = '';
  // El ticket en curso (currentOrder) y el contexto de edicion se preservan al
  // navegar entre interfaces. Solo se limpian con resetOrder() (tras enviar /
  // completar / cancelar) o con clearOrder() (boton de limpiar la orden).
  renderPage(id);
}

function renderPage(id) {
  const content = document.getElementById('mainContent');
  switch (id) {
    case 'pos':
      content.innerHTML = buildPOS();
      break;
    case 'comandas':
      content.innerHTML = buildComandas();
      break;
    case 'products':
      content.innerHTML = buildProducts();
      break;
    case 'categories':
      content.innerHTML = buildCategories();
      break;
    case 'combos':
      content.innerHTML = buildCombos();
      break;
    case 'inventory':
      content.innerHTML = buildInventory();
      break;
    case 'users':
      content.innerHTML = buildUsers();
      break;
    case 'dashboard':
      content.innerHTML = buildDashboard();
      break;
    case 'finances':
      content.innerHTML = buildFinances();
      break;
    case 'sales':
      content.innerHTML = buildSales();
      (async () => {
        try {
          const res = await fetch('/api/sales');
          if (res.ok) {
            const rows = await res.json();
            // Merge: assign DB ids to in-memory records that lack them,
            // and add any DB records not already in memory (e.g. from other sessions).
            const inMemoryByTicket = new Map(state.salesRecords.map(s => [s.ticketNumber, s]));
            rows.forEach(row => {
              const mem = inMemoryByTicket.get(row.ticketNumber);
              if (mem) {
                if (mem.id == null) mem.id = row.id;
              } else {
                state.salesRecords.push(row);
              }
            });
            const listEl = document.getElementById('salesListPanel');
            if (listEl) listEl.innerHTML = renderSalesListHTML();
            const sumEl = document.getElementById('salesDaySummary');
            if (sumEl) sumEl.innerHTML = renderSalesDaySummaryHTML();
          }
        } catch {}
        loadSalesMovements();
      })();
      break;
    case 'settings':
      content.innerHTML = buildSettings();
      if (currentUser.role === 'owner') loadBackups();
      break;
    default:
      content.innerHTML = buildPOS();
      break;
  }
}

function catIcon(category) {
  return `<div class="mi-icon" style="color:var(--accent-dark)">${CAT_ICONS[category] || DEFAULT_ICON}</div>`;
}

// ===================== POS =====================
function buildPOS() {
  const isEditing = editingComandaId !== null;
  if (!isEditing && !currentOrder.type) {
    // No abrir modal automáticamente, solo mostrar el panel vacío
  }
  const title = isEditing ? `Editando Orden #${editingComandaId}` : `Orden #${state.settings.dailyOrderCounter + 1}`;
  const orderHint = !currentOrder.type ? 'Selecciona tipo de orden para comenzar' : '';
  return `<div class="pos-layout">
    <div class="menu-section">
      <div class="cat-tabs" id="catTabs">
        ${['Todos', ...state.categories.map(c => c.name)].map((category) => `
          <div class="cat-tab ${category === posCategory ? 'active' : ''}" onclick="setPosCategory('${category}')">${esc(category)}</div>
        `).join('')}
      </div>
      <div class="menu-grid" id="menuGrid">${renderMenuItems()}</div>
    </div>
    <div class="order-panel">
      <div class="order-header">
        <div class="order-top">
          <span class="order-title">${esc(title)}</span>
          <div class="type-toggle">
            <button class="type-btn ${currentOrder.type === 'comedor' ? 'active' : ''}" onclick="prepareOrderType('comedor')">Comedor</button>
            <button class="type-btn ${currentOrder.type === 'llevar' ? 'active' : ''}" onclick="prepareOrderType('llevar')">Llevar</button>
          </div>
        </div>
        ${orderHint ? `<div class="order-hint">${esc(orderHint)}</div>` : ''}
        <div id="mesaSection" style="${currentOrder.type === 'comedor' ? '' : 'display:none'}">
          <div class="mesa-label">Mesa</div>
          <div class="mesa-chips">
            ${MESAS.map((mesa) => `<div class="mesa-chip ${currentOrder.mesa === mesa ? 'selected' : ''}" onclick="selectMesa('${mesa}')">${mesa}</div>`).join('')}
          </div>
        </div>
        <div class="comensales-row" id="comensalesRow" style="${currentOrder.type === 'comedor' ? '' : 'opacity:0.4;pointer-events:none'}">
          <span class="com-label">Comensales</span>
          <div class="com-ctrl">
            <button class="cc-btn" onclick="changeComensales(-1)">-</button>
            <span class="cc-num" id="ccNum">${currentOrder.comensales}</span>
            <button class="cc-btn" onclick="changeComensales(1)">+</button>
          </div>
        </div>
      </div>
      <div class="order-items" id="orderItems">${renderOrderItems()}</div>
      <div class="order-notes">
        <label>Notas especiales</label>
        <textarea id="orderNotes" placeholder="Sin cebolla, extra picante..." oninput="currentOrder.notes=this.value">${esc(currentOrder.notes)}</textarea>
      </div>
      <div class="order-totals" id="orderTotals">${renderTotals()}</div>
      <div class="order-actions">
        ${isEditing ? `
          <button class="btn btn-primary btn-full" onclick="updateComanda()">
            <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
            Actualizar comanda
          </button>
          <div style="display:flex;gap:7px;margin-top:7px">
            <button class="btn btn-secondary" style="flex:1" onclick="cancelEdit()">
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
              Cancelar edicion
            </button>
            <button class="btn btn-danger" style="flex:1" onclick="clearOrder()">
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
              Limpiar
            </button>
          </div>
        ` : `
          <button class="btn btn-primary btn-full" onclick="sendComanda()">
            <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
            Enviar comanda a cocina
          </button>
          <div style="display:flex;gap:7px;margin-top:7px">
            <button class="btn btn-primary" style="flex:1" onclick="openOrderTypeModal()">
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
              Nuevo ticket
            </button>
            <button class="btn btn-secondary" style="flex:1" onclick="showTicket()">
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a1 1 0 001-1v-4H8v4a1 1 0 001 1zm1-11V5a1 1 0 011-1h2a1 1 0 011 1v1M9 7h6M9 11h4"/></svg>
              Ticket
            </button>
          </div>
          <div style="display:flex;gap:7px;margin-top:7px">
            <button class="btn btn-secondary" style="flex:1" onclick="parkCurrentOrder()">
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              Pausar
            </button>
            <button class="btn btn-secondary" style="flex:1" onclick="openParkedModal()">
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              Pausados${(state.parkedOrders && state.parkedOrders.length) ? ` (${state.parkedOrders.length})` : ''}
            </button>
            <button class="btn btn-danger" style="flex:1" onclick="clearOrder()">
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
              Limpiar
            </button>
          </div>
        `}
      </div>
    </div>
  </div>`;
}

function openOrderTypeModal() {
  if (document.querySelector('.modal-overlay.open:not(#productModal)')) return;
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay open';
  overlay.innerHTML = `<div class="modal" style="width:480px;">
    <div class="modal-header"><h3>¿Para comer aquí o para llevar?</h3></div>
    <div class="modal-body" style="display:flex;flex-direction:column;gap:16px;padding:30px 20px;">
      <button class="order-type-btn order-type-comedor" onclick="prepareOrderType('comedor')">
        <div class="order-type-icon">
          <svg width="52" height="52" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 2v7a2 2 0 002 2h2a2 2 0 002-2V2"/>
            <path d="M6 2v20"/>
            <path d="M19 2a4 4 0 00-4 4v6a2 2 0 002 2h2"/>
            <path d="M19 14v8"/>
          </svg>
        </div>
        <div class="order-type-content">
          <div class="order-type-title">Para comer aquí</div>
          <div class="order-type-desc">Servicio en comedor</div>
        </div>
      </button>
      <button class="order-type-btn order-type-llevar" onclick="prepareOrderType('llevar')">
        <div class="order-type-icon">
          <svg width="52" height="52" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5.5 8.5h13l-1 11.5a1.5 1.5 0 01-1.5 1.4H8a1.5 1.5 0 01-1.5-1.4l-1-11.5z"/>
            <path d="M9 8.5V7a3 3 0 016 0v1.5"/>
            <path d="M5.5 8.5l1-2.5a1.2 1.2 0 011.1-.7h8.8a1.2 1.2 0 011.1.7l1 2.5"/>
            <path d="M9.5 13c.7-.5 1.5-.7 2.5-.7s1.8.2 2.5.7"/>
          </svg>
        </div>
        <div class="order-type-content">
          <div class="order-type-title">Para llevar</div>
          <div class="order-type-desc">Empaque para llevar</div>
        </div>
      </button>
    </div>
  </div>`;
  document.body.appendChild(overlay);
}

function prepareOrderType(type) {
  const overlay = document.querySelector('.modal-overlay.open:not(#productModal)');
  if (overlay) overlay.remove();
  if (type === 'llevar') {
    currentOrder.type = 'llevar';
    currentOrder.mesa = 'Mostrador';
    currentOrder.comensales = 1;
    refreshOrderPanel();
    flushPendingAdd();
    return;
  }
  currentOrder.type = 'comedor';
  currentOrder.mesa = MESAS[0];
  currentOrder.comensales = 2;
  openMesaSelectionModal();
}

function openMesaSelectionModal() {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay open';
  overlay.innerHTML = `<div class="modal">
    <div class="modal-header"><h3>Selecciona la mesa</h3></div>
    <div class="modal-body" style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;">
      ${MESAS.map((mesa) => `<button class="btn btn-secondary" style="flex:1 1 120px;min-width:120px;" onclick="selectMesaAndContinue('${mesa}')">${mesa}</button>`).join('')}
    </div>
  </div>`;
  document.body.appendChild(overlay);
}

function selectMesaAndContinue(mesa) {
  currentOrder.mesa = mesa;
  const overlay = document.querySelector('.modal-overlay.open:not(#productModal)');
  if (overlay) overlay.remove();
  openComensalesModal();
}

function openComensalesModal() {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay open';
  overlay.innerHTML = `<div class="modal">
    <div class="modal-header"><h3>¿Cuántas personas serán?</h3></div>
    <div class="modal-body" style="display:flex;align-items:center;justify-content:center;gap:10px;">
      <button class="btn btn-secondary" onclick="adjustPax(-1)">-</button>
      <span id="paxCount" style="font-size:24px;font-weight:700">${currentOrder.comensales}</span>
      <button class="btn btn-secondary" onclick="adjustPax(1)">+</button>
    </div>
    <div class="modal-footer" style="display:flex;gap:10px;">
      <button class="btn btn-secondary btn-full" onclick="closeCurrentModal()">Cancelar</button>
      <button class="btn btn-primary btn-full" onclick="confirmPax()">Continuar</button>
    </div>
  </div>`;
  document.body.appendChild(overlay);
}

function adjustPax(delta) {
  currentOrder.comensales = Math.max(1, currentOrder.comensales + delta);
  const paxCount = document.getElementById('paxCount');
  if (paxCount) paxCount.textContent = currentOrder.comensales;
}

function confirmPax() {
  const overlay = document.querySelector('.modal-overlay.open:not(#productModal)');
  if (overlay) overlay.remove();
  refreshOrderPanel();
  flushPendingAdd();
}

function closeCurrentModal() {
  const overlay = document.querySelector('.modal-overlay.open:not(#productModal)');
  if (overlay) overlay.remove();
}

function flushPendingAdd() {
  if (pendingAddId == null) return;
  const id = pendingAddId;
  const isCombo = pendingAddIsCombo;
  pendingAddId = null;
  pendingAddIsCombo = false;
  if (isCombo) addComboToOrder(id);
  else addToOrder(id);
}

function renderMenuItems(filter) {
  const term = String(filter || '').trim().toLowerCase();
  const products = state.products.filter((product) => {
    const matchCat = posCategory === 'Todos' || product.cat === posCategory;
    const matchTerm = !term || product.name.toLowerCase().includes(term);
    return matchCat && matchTerm;
  });
  const combos = state.combos.filter((combo) => {
    const matchTerm = !term || combo.name.toLowerCase().includes(term);
    return matchTerm;
  });
  const items = [...products, ...combos.map(c => ({ ...c, isCombo: true }))];
  if (!items.length) {
    return `<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--stone);font-size:13px">Sin productos</div>`;
  }
  return items.map((item) => {
    if (item.isCombo) {
      return `
        <div class="menu-item combo-item" onclick="addComboToOrder(${item.id})">
          <div class="mi-icon" style="color:var(--accent-dark)">🍽️</div>
          <div class="mi-name">${esc(item.name)}</div>
          <div class="mi-price">$${fmt(item.price)} MXN</div>
          <div class="mi-desc">${esc(item.description || 'Combo')}</div>
        </div>
      `;
    } else {
      const displayStock = getAvailableStock(item.id);
      const outOfStock = displayStock <= 0;
      return `
        <div class="menu-item ${outOfStock ? 'out-of-stock' : ''}" onclick="addToOrder(${item.id})">
          ${outOfStock ? '<span class="oos-badge">Sin stock</span>' : ''}
          ${catIcon(item.cat)}
          <div class="mi-name">${esc(item.name)}</div>
          <div class="mi-price">$${fmt(item.price)} MXN</div>
          <div class="mi-stock">Stock: ${displayStock}</div>
        </div>
      `;
    }
  }).join('');
}

function renderOrderItems() {
  if (!currentOrder.items.length) {
    return `<div class="order-empty">
      <div class="oe-icon"><svg width="44" height="44" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" style="color:var(--stone-light)"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg></div>
      <p>Selecciona productos del menu</p>
    </div>`;
  }
  return currentOrder.items.map((item, index) => `
    <div class="order-item">
      <div class="oi-qctrl">
        <button class="oi-qbtn" onclick="changeQty(${index},-1)">-</button>
        <span class="oi-qty">${item.qty}</span>
        <button class="oi-qbtn" onclick="changeQty(${index},1)">+</button>
      </div>
      <div class="oi-info">
        <div class="oi-name">${esc(item.name)}</div>
        <div class="oi-uprice">$${fmt(item.price)} c/u</div>
        ${item.variantLabel ? `<div class="mi-stock" style="margin-top:3px">${esc(item.variantLabel)}</div>` : ''}
        ${item.isCombo && item.comboItems?.length ? `<div style="font-size:11px;color:var(--stone);margin-top:3px;line-height:1.6">${item.comboItems.map(ci => `• ${ci.qty}x ${esc(ci.name || '')}${ci.variantLabel ? ` <span style="color:var(--accent-dark)">(${esc(ci.variantLabel)})</span>` : ''}`).join('<br>')}</div>` : ''}
        ${item.notes ? `<div class="mi-stock" style="margin-top:3px;color:var(--accent-dark)">Nota: ${esc(item.notes)}</div>` : ''}
        <div style="margin-top:5px">
          <button class="btn btn-secondary btn-sm" onclick="openItemNotesModal(${index})">Notas</button>
        </div>
      </div>
      <div class="oi-total">$${fmt(item.price * item.qty)}</div>
      <button class="oi-del" onclick="removeFromOrder(${index})">x</button>
    </div>
  `).join('');
}

function renderTotals() {
  const totals = calculateTotals(currentOrder.items);
  return `
    <div class="tot-row total"><span>TOTAL</span><span class="tot-currency">$${fmt(totals.total)} MXN</span></div>
  `;
}

function setPosCategory(category) {
  posCategory = category;
  document.querySelectorAll('.cat-tab').forEach((tab) => {
    tab.classList.toggle('active', tab.textContent === category);
  });
  const grid = document.getElementById('menuGrid');
  if (grid) grid.innerHTML = renderMenuItems(document.getElementById('gSearch')?.value || '');
}

function setOrderType(type) {
  currentOrder.type = type;
  if (type === 'llevar') {
    currentOrder.mesa = 'Mostrador';
    currentOrder.comensales = Math.max(1, currentOrder.comensales);
  } else if (currentOrder.mesa === 'Mostrador') {
    currentOrder.mesa = 'Mesa 1';
  }
  document.querySelectorAll('.type-btn').forEach((button) => button.classList.toggle('active',
    (type === 'comedor' && button.textContent.includes('Comedor'))
    || (type === 'llevar' && button.textContent.includes('Llevar'))));
  const mesaSection = document.getElementById('mesaSection');
  const comensalesRow = document.getElementById('comensalesRow');
  if (mesaSection) mesaSection.style.display = type === 'llevar' ? 'none' : 'block';
  if (comensalesRow) {
    comensalesRow.style.opacity = type === 'llevar' ? '0.4' : '1';
    comensalesRow.style.pointerEvents = type === 'llevar' ? 'none' : 'auto';
  }
}

function selectMesa(mesa) {
  currentOrder.mesa = mesa;
  document.querySelectorAll('.mesa-chip').forEach((chip) => chip.classList.toggle('selected', chip.textContent === mesa));
}

function changeComensales(delta) {
  currentOrder.comensales = Math.max(1, currentOrder.comensales + delta);
  const value = document.getElementById('ccNum');
  if (value) value.textContent = currentOrder.comensales;
}

function logComandaAction(description, extra) {
  if (!editingComandaId) return;
  const comanda = state.commandas.find(c => c.ticketNumber === editingComandaId);
  const mesa = comanda ? (comanda.type === 'llevar' ? 'Llevar' : comanda.mesa) : '';
  fetch('/api/movements', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      type: 'comanda_action',
      description: `Comanda #${editingComandaId}${mesa ? ' (' + mesa + ')' : ''}: ${description}`,
      user: currentUser.name,
      timestamp: new Date().toISOString(),
      data: JSON.stringify({ ticketNumber: editingComandaId, mesa, ...extra })
    })
  }).catch(() => {});
}

function addToOrder(id) {
  if (!currentOrder.type) {
    pendingAddId = id;
    pendingAddIsCombo = false;
    openOrderTypeModal();
    return;
  }
  const product = productById(id);
  if (!product) return;
  if (getProductVariants(product).length > 0) {
    openProductConfigModal(product);
    return;
  }
  const existing = currentOrder.items.find((item) => item.id === id && !item.notes && !item.variantKey);
  const nextQty = existing ? existing.qty + 1 : 1;
  const available = getAvailableStock(id);
  if (nextQty > available) {
    showToast(`Stock insuficiente para ${product.name}`, 'error');
    return;
  }
  if (existing) existing.qty = nextQty;
  else currentOrder.items.push(createOrderItemSnapshot(product, 1));
  logComandaAction(`agregó 1x ${product.name}`, { action: 'add', item: product.name });
  refreshOrderPanel();
}

function addComboToOrder(id) {
  if (!currentOrder.type) {
    pendingAddId = id;
    pendingAddIsCombo = true;
    openOrderTypeModal();
    return;
  }
  const combo = state.combos.find(c => c.id === id);
  if (!combo) return;
  for (const ci of combo.items) {
    const product = productById(ci.id);
    if (!product || product.stock < ci.qty) {
      showToast(`Stock insuficiente para ${product?.name || 'producto en combo'}`, 'error');
      return;
    }
  }
  const needsConfig = combo.items.some(ci => getProductVariants(productById(ci.id)).length > 0);
  if (needsConfig) {
    openComboConfigModal(combo);
  } else {
    const comboOrderItem = {
      id: `combo-${id}`,
      name: combo.name,
      price: combo.price,
      qty: 1,
      isCombo: true,
      comboItems: combo.items.map(ci => ({ ...ci, name: ci.name || productById(ci.id)?.name || '' })),
    };
    currentOrder.items.push(comboOrderItem);
    refreshOrderPanel();
  }
}

function openComboConfigModal(combo) {
  const variantItems = combo.items
    .map((ci, index) => ({ ci, index, product: productById(ci.id), groups: getProductVariants(productById(ci.id)) }))
    .filter(x => x.groups.length > 0);

  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay open';
  overlay.dataset.modalType = 'comboConfig';
  overlay.innerHTML = `<div class="modal">
    <div class="modal-header">
      <h3>Configura: ${esc(combo.name)}</h3>
      <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">×</button>
    </div>
    <div class="modal-body">
      ${variantItems.map(({ ci, index, product, groups }) => `
        <div style="margin-bottom:16px">
          <div style="font-weight:600;font-size:13.5px;margin-bottom:10px;color:var(--charcoal)">
            ${esc(product.name)}${ci.qty > 1 ? ` × ${ci.qty}` : ''}
          </div>
          ${groups.map((group, gi) => `
            <div style="margin-bottom:8px">
              <div style="font-size:11.5px;color:var(--stone);margin-bottom:6px">
                ${esc(group.name)} — elige ${group.minSelect === group.maxSelect ? group.minSelect : `${group.minSelect}–${group.maxSelect}`}
              </div>
              <div style="display:flex;flex-wrap:wrap;gap:5px">
                ${group.options.map(opt => `
                  <button type="button" class="cat-tab combo-order-opt"
                    data-item="${index}" data-group="${gi}" data-opt="${esc(opt.name)}"
                    onclick="toggleComboOrderOpt(${index},${gi},${group.maxSelect},this)">
                    ${esc(opt.name)}
                  </button>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      `).join('')}
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="this.closest('.modal-overlay').remove()">Cancelar</button>
      <button class="btn btn-primary" onclick="confirmComboConfig(${combo.id})">Agregar al pedido</button>
    </div>
  </div>`;
  document.body.appendChild(overlay);
}

function toggleComboOrderOpt(itemIndex, groupIndex, maxSelect, btn) {
  const siblings = document.querySelectorAll(`.combo-order-opt[data-item="${itemIndex}"][data-group="${groupIndex}"]`);
  if (btn.classList.contains('active')) {
    btn.classList.remove('active');
  } else if (maxSelect === 1) {
    siblings.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  } else if ([...siblings].filter(b => b.classList.contains('active')).length < maxSelect) {
    btn.classList.add('active');
  } else {
    showToast(`Máximo ${maxSelect} opciones`, 'error');
  }
}

function confirmComboConfig(comboId) {
  const combo = state.combos.find(c => c.id === comboId);
  if (!combo) return;
  let valid = true;
  const comboItems = combo.items.map((ci, index) => {
    const product = productById(ci.id);
    const groups = getProductVariants(product);
    let variantLabel = '';
    let variantKey = '';
    if (groups.length) {
      const labelParts = [];
      const keyParts = [];
      groups.forEach((group, gi) => {
        const selected = [...document.querySelectorAll(`.combo-order-opt[data-item="${index}"][data-group="${gi}"].active`)].map(b => b.dataset.opt);
        if (group.minSelect > 0 && selected.length < group.minSelect) {
          showToast(`Selecciona al menos ${group.minSelect} opción de "${group.name}" para ${product.name}`, 'error');
          valid = false;
          return;
        }
        if (selected.length) labelParts.push(`${group.name}: ${selected.join(' + ')}`);
        keyParts.push(selected.slice().sort().join('|'));
      });
      variantLabel = labelParts.join(' · ');
      variantKey = keyParts.join('||');
    }
    return { id: ci.id, qty: ci.qty, name: ci.name || product?.name || '', variantLabel, variantKey };
  });
  if (!valid) return;
  document.querySelector('.modal-overlay[data-modal-type="comboConfig"]').remove();
  currentOrder.items.push({
    id: `combo-${combo.id}`,
    name: combo.name,
    price: combo.price,
    qty: 1,
    isCombo: true,
    comboItems,
  });
  refreshOrderPanel();
}

function changeQty(index, delta) {
  const item = currentOrder.items[index];
  if (!item) return;
  const nextQty = item.qty + delta;
  if (nextQty <= 0) {
    logComandaAction(`quitó ${item.qty}x ${item.name}`, { action: 'remove', item: item.name });
    currentOrder.items.splice(index, 1);
    refreshOrderPanel();
    return;
  }
  const otherQty = currentOrder.items
    .filter((_, itemIndex) => itemIndex !== index && currentOrder.items[itemIndex].id === item.id)
    .reduce((sum, entry) => sum + entry.qty, 0);
  if (nextQty + otherQty > getAvailableStock(item.id)) {
    showToast(`Stock insuficiente para ${item.name}`, 'error');
    return;
  }
  const prev = item.qty;
  item.qty = nextQty;
  logComandaAction(`${delta > 0 ? 'aumentó' : 'redujo'} ${item.name}: ${prev}→${nextQty}`, { action: 'qty_change', item: item.name, from: prev, to: nextQty });
  refreshOrderPanel();
}

function removeFromOrder(index) {
  const item = currentOrder.items[index];
  if (item) logComandaAction(`quitó ${item.qty}x ${item.name}`, { action: 'remove', item: item.name });
  currentOrder.items.splice(index, 1);
  refreshOrderPanel();
}

function openItemNotesModal(index) {
  const item = currentOrder.items[index];
  if (!item) return;
  document.getElementById('itemNotesIndex').value = index;
  document.getElementById('itemNotesSub').textContent = `Producto: ${item.name}`;
  document.getElementById('itemNotesInput').value = item.notes || '';
  openModal('itemNotesModal');
}

function closeItemNotesModal() {
  document.getElementById('itemNotesIndex').value = '';
  document.getElementById('itemNotesInput').value = '';
  closeModal('itemNotesModal');
}

function saveItemNotes() {
  const index = Number(document.getElementById('itemNotesIndex').value);
  const item = currentOrder.items[index];
  if (!item) return;
  item.notes = document.getElementById('itemNotesInput').value.trim();
  closeItemNotesModal();
  refreshOrderPanel();
}

function getProductVariants(product) {
  if (Array.isArray(product?.variants) && product.variants.length > 0) return product.variants;
  if (isMontadoProduct(product)) {
    return [
      {
        name: 'Guiso',
        minSelect: 1,
        maxSelect: 2,
        options: MONTADO_FILLINGS.map(filling => ({ name: filling, priceDelta: 0 })),
      },
    ];
  }
  return [];
}

function openProductConfigModal(product) {
  const groups = getProductVariants(product);
  if (groups.length === 0) return;
  productConfigContext = {
    productId: product.id,
    groups: groups.map(g => ({ ...g, options: g.options.map(o => ({ ...o })) })),
    selections: groups.map(() => []),
  };
  document.getElementById('productConfigTitle').textContent = `Configurar ${product.name}`;
  document.getElementById('productConfigSub').textContent = 'Selecciona las opciones del producto';
  document.getElementById('productConfigNotes').value = '';
  renderProductConfigGroups();
  openModal('productConfigModal');
}

function closeProductConfigModal() {
  productConfigContext = null;
  document.getElementById('productConfigNotes').value = '';
  document.getElementById('productConfigSummary').textContent = '';
  closeModal('productConfigModal');
}

function toggleVariantOption(groupIndex, optName) {
  if (!productConfigContext) return;
  const group = productConfigContext.groups[groupIndex];
  const selections = productConfigContext.selections[groupIndex];
  const idx = selections.indexOf(optName);
  if (idx >= 0) {
    selections.splice(idx, 1);
  } else if (group.maxSelect === 1) {
    productConfigContext.selections[groupIndex] = [optName];
  } else if (selections.length < group.maxSelect) {
    selections.push(optName);
  } else {
    selections.shift();
    selections.push(optName);
  }
  renderProductConfigGroups();
}

function renderProductConfigGroups() {
  if (!productConfigContext) return;
  const container = document.getElementById('productConfigGroups');
  if (!container) return;
  const fmtDelta = (d) => d === 0 ? '' : (d > 0 ? `+$${fmt(d)}` : `-$${fmt(Math.abs(d))}`);
  container.innerHTML = productConfigContext.groups.map((group, gi) => {
    const selected = productConfigContext.selections[gi];
    const rule = group.minSelect === group.maxSelect
      ? `Elige ${group.maxSelect}`
      : `Elige entre ${group.minSelect} y ${group.maxSelect}`;
    return `<div class="vc-group">
      <div class="vc-group-head">
        <div class="vc-group-name">${esc(group.name)}</div>
        <div class="vc-group-rule">${rule} · ${selected.length}/${group.maxSelect} seleccionados</div>
      </div>
      <div class="vc-options">
        ${group.options.map(opt => {
          const isSel = selected.includes(opt.name);
          return `<button type="button" class="vc-option ${isSel ? 'selected' : ''}" onclick='toggleVariantOption(${gi}, ${jsv(opt.name)})'>
            <span>${esc(opt.name)}</span>
            ${opt.priceDelta !== 0 ? `<span class="vc-delta">${fmtDelta(opt.priceDelta)}</span>` : ''}
          </button>`;
        }).join('')}
      </div>
    </div>`;
  }).join('');

  // summary
  const summaryParts = productConfigContext.groups.map((group, gi) => {
    const sel = productConfigContext.selections[gi];
    return sel.length ? `${group.name}: ${sel.join(', ')}` : `${group.name}: pendiente`;
  });
  const totalDelta = computeVariantDelta(productConfigContext);
  const deltaText = totalDelta !== 0 ? ` · Ajuste: ${totalDelta > 0 ? '+' : '-'}$${fmt(Math.abs(totalDelta))}` : '';
  document.getElementById('productConfigSummary').textContent = summaryParts.join(' · ') + deltaText;
}

function computeVariantDelta(ctx) {
  let delta = 0;
  ctx.groups.forEach((group, gi) => {
    const selected = ctx.selections[gi];
    selected.forEach(name => {
      const opt = group.options.find(o => o.name === name);
      if (opt) delta += Number(opt.priceDelta) || 0;
    });
  });
  return delta;
}

function saveConfiguredProduct() {
  if (!productConfigContext) return;
  const product = productById(productConfigContext.productId);
  if (!product) return;

  for (let gi = 0; gi < productConfigContext.groups.length; gi++) {
    const group = productConfigContext.groups[gi];
    const sel = productConfigContext.selections[gi];
    if (sel.length < group.minSelect) {
      showToast(`Selecciona al menos ${group.minSelect} en "${group.name}"`, 'error');
      return;
    }
    if (sel.length > group.maxSelect) {
      showToast(`Máximo ${group.maxSelect} en "${group.name}"`, 'error');
      return;
    }
  }

  const notes = document.getElementById('productConfigNotes').value.trim();
  const labelParts = productConfigContext.groups.map((g, gi) => {
    const sel = productConfigContext.selections[gi];
    return sel.length ? `${g.name}: ${sel.join(' + ')}` : '';
  }).filter(Boolean);
  const variantLabel = labelParts.join(' · ');
  const keyParts = productConfigContext.selections.map(arr => arr.slice().sort().join('|'));
  const variantKey = keyParts.join('||');
  const delta = computeVariantDelta(productConfigContext);

  const existing = currentOrder.items.find((item) => item.id === product.id && item.variantKey === variantKey && item.notes === notes);
  const nextQty = existing ? existing.qty + 1 : 1;
  const available = getAvailableStock(product.id);
  if (nextQty > available) {
    showToast(`Stock insuficiente para ${product.name}`, 'error');
    return;
  }
  if (existing) {
    existing.qty = nextQty;
  } else {
    const item = createOrderItemSnapshot(product, 1);
    item.price = toMoney(item.price + delta);
    item.variantLabel = variantLabel;
    item.variantKey = variantKey;
    item.notes = notes;
    currentOrder.items.push(item);
  }
  closeProductConfigModal();
  refreshOrderPanel();
}

function refreshOrderPanel() {
  const orderItems = document.getElementById('orderItems');
  if (orderItems) orderItems.innerHTML = renderOrderItems();
  const totals = document.getElementById('orderTotals');
  if (totals) totals.innerHTML = renderTotals();
  const grid = document.getElementById('menuGrid');
  if (grid) grid.innerHTML = renderMenuItems(document.getElementById('gSearch')?.value || '');
  const notes = document.getElementById('orderNotes');
  if (notes && notes.value !== currentOrder.notes) notes.value = currentOrder.notes;
}

function clearOrder() {
  const keepEditContext = editingComandaId !== null;
  currentOrder = createEmptyOrder();
  if (keepEditContext) {
    currentOrder.type = 'comedor';
    currentOrder.mesa = 'Mesa 1';
    currentOrder.comensales = 2;
  }
  refreshOrderPanel();
}

// ===================== TICKETS PAUSADOS =====================
async function parkCurrentOrder() {
  if (!currentOrder.items.length) {
    showToast('No hay productos para pausar', 'error');
    return;
  }
  const label = currentOrder.type === 'llevar' ? 'Para llevar' : (currentOrder.mesa || 'Sin mesa');
  const payload = {
    label,
    type: currentOrder.type || 'comedor',
    mesa: currentOrder.mesa || '',
    comensales: currentOrder.comensales || 1,
    notes: currentOrder.notes || '',
    waiter: currentUser.name,
    items: currentOrder.items.map((item) => ({ ...item })),
  };
  try {
    const res = await fetch('/api/parked', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const { id, createdAt } = await res.json();
    if (!state.parkedOrders) state.parkedOrders = [];
    state.parkedOrders.push({ id, createdAt, ...payload });
    resetOrder();
    refreshOrderPanel();
    showToast('Ticket pausado', 'success');
  } catch (error) {
    console.error('Error al pausar ticket:', error);
    showToast('Error al pausar el ticket', 'error');
  }
}

function openParkedModal() {
  document.getElementById('parkedModal')?.remove();
  const list = state.parkedOrders || [];
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay open';
  overlay.id = 'parkedModal';
  const body = list.length
    ? list.map((p) => {
        const items = Array.isArray(p.items) ? p.items : [];
        const count = items.reduce((s, i) => s + (i.qty || 0), 0);
        const preview = items.slice(0, 3).map((i) => `${i.qty}x ${esc(i.name)}`).join(', ');
        const more = items.length > 3 ? '…' : '';
        return `<div class="card" style="padding:13px;display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:9px">
          <div style="min-width:0">
            <div style="font-weight:700;font-size:13px;color:var(--charcoal)">${esc(p.label || 'Ticket')} · <span style="color:var(--stone);font-weight:500">${count} art.</span></div>
            <div style="font-size:11.5px;color:var(--stone);margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:300px">${preview}${more}</div>
            <div style="font-size:10.5px;color:var(--stone);margin-top:2px">Pausado hace ${minutesAgo(p.createdAt)} · ${esc(p.waiter || '')}</div>
          </div>
          <div style="display:flex;gap:6px;flex-shrink:0">
            <button class="btn btn-primary btn-sm" onclick="resumeParkedOrder(${p.id})">Retomar</button>
            <button class="btn btn-danger btn-sm" onclick="deleteParkedOrder(${p.id})">Eliminar</button>
          </div>
        </div>`;
      }).join('')
    : `<div style="text-align:center;padding:30px 20px;color:var(--stone);font-size:13px">No hay tickets pausados</div>`;
  overlay.innerHTML = `<div class="modal" style="width:520px;max-width:94vw">
    <div class="modal-header"><h3>Tickets pausados</h3><button class="modal-close" onclick="this.closest('.modal-overlay').remove()">×</button></div>
    <div class="modal-body" style="padding:18px;max-height:62vh;overflow-y:auto">${body}</div>
  </div>`;
  document.body.appendChild(overlay);
}

async function resumeParkedOrder(id) {
  const list = state.parkedOrders || [];
  const parked = list.find((p) => p.id === id);
  if (!parked) return;
  // Si hay una orden en curso con productos, pausarla primero para no perderla.
  if (currentOrder.items.length) {
    await parkCurrentOrder();
  }
  // Quitar el retomado de pausados (backend + memoria)
  try { await fetch(`/api/parked/${id}`, { method: 'DELETE' }); } catch {}
  const fresh = state.parkedOrders || [];
  const fi = fresh.findIndex((p) => p.id === id);
  if (fi !== -1) fresh.splice(fi, 1);
  // Cargar a la orden actual
  editingComandaId = null;
  currentOrder = {
    items: (parked.items || []).map((item) => ({ ...item })),
    type: parked.type || 'comedor',
    mesa: parked.mesa || 'Mesa 1',
    comensales: parked.comensales || 2,
    notes: parked.notes || '',
  };
  document.getElementById('parkedModal')?.remove();
  navigateTo('pos');
  showToast('Ticket retomado', 'success');
}

async function deleteParkedOrder(id) {
  try { await fetch(`/api/parked/${id}`, { method: 'DELETE' }); } catch {}
  const list = state.parkedOrders || [];
  const idx = list.findIndex((p) => p.id === id);
  if (idx !== -1) list.splice(idx, 1);
  openParkedModal();
}

async function sendComanda() {
  if (!currentOrder.type) {
    openOrderTypeModal();
    return;
  }
  if (!currentOrder.items.length) {
    showToast('Agrega productos a la orden', 'error');
    return;
  }
  const validation = validateOrderStock(currentOrder.items);
  if (!validation.ok) {
    showToast(validation.message, 'error');
    return;
  }
  state.settings.dailyOrderCounter += 1;
  const ticketNumber = state.settings.dailyOrderCounter;
  const ticketDate = new Date().toISOString().split('T')[0];
  const newItems = currentOrder.items.map((item) => ({ ...item }));
  newItems.forEach((item) => {
    if (item.isCombo) {
      // Adjust stock for combo items
      item.comboItems.forEach(comboItem => {
        const product = productById(comboItem.id);
        if (product) product.stock = Math.max(0, product.stock - comboItem.qty * item.qty);
      });
    } else {
      const product = productById(item.id);
      if (product) product.stock = Math.max(0, product.stock - item.qty);
    }
  });
  const orderData = {
    ticketNumber,
    ticketDate,
    type: currentOrder.type,
    mesa: currentOrder.type === 'llevar' ? 'Mostrador' : currentOrder.mesa,
    comensales: currentOrder.type === 'llevar' ? 1 : currentOrder.comensales,
    notes: currentOrder.notes.trim(),
    waiter: currentUser.name,
    items: newItems,
  };
  try {
    const res = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData)
    });
    const { id } = await res.json();
    orderData.id = id;
    state.commandas.push(orderData);
    // Save settings
    await fetch('/api/settings', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state.settings)
    });
    // Log new order with product detail
    const itemList = newItems.map(i => `${i.qty}x ${i.name}`).join(', ');
    fetch('/api/movements', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'create_order',
        description: `Nueva comanda #${ticketNumber} (${orderData.type === 'llevar' ? 'Llevar' : orderData.mesa}): ${itemList}`,
        user: currentUser.name,
        timestamp: new Date().toISOString(),
        data: JSON.stringify({ ticketNumber, mesa: orderData.mesa, type: orderData.type, items: newItems })
      })
    });
    showToast(`Comanda #${ticketNumber} enviada a cocina`, 'success');
    resetOrder();
    refreshOrderPanel();
    updateBadge();
  } catch (error) {
    console.error('Error sending comanda:', error);
    showToast('Error al enviar comanda', 'error');
  }
}

async function updateComanda() {
  if (!currentOrder.items.length) {
    showToast('Agrega productos a la orden', 'error');
    return;
  }
  const index = state.commandas.findIndex((comanda) => comanda.ticketNumber === editingComandaId);
  if (index === -1) return;
  const validation = validateOrderStock(currentOrder.items);
  if (!validation.ok) {
    showToast(validation.message, 'error');
    return;
  }

  const previous = state.commandas[index].items;
  const next = currentOrder.items.map((item) => ({ ...item }));
  setProductsStockFromOrderDiff(previous, next);

  const updatedComanda = {
    ...state.commandas[index],
    items: next,
    type: currentOrder.type,
    mesa: currentOrder.type === 'llevar' ? 'Mostrador' : currentOrder.mesa,
    comensales: currentOrder.type === 'llevar' ? 1 : currentOrder.comensales,
    notes: currentOrder.notes.trim(),
    updatedAt: new Date().toISOString(),
  };

  try {
    await fetch(`/api/orders/${state.commandas[index].id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedComanda)
    });
    // Update stock in API
    for (const item of next) {
      const product = productById(item.id);
      if (product) {
        await fetch(`/api/products/${item.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ stock: product.stock })
        });
      }
    }
    state.commandas[index] = updatedComanda;

    // Log edit with before/after diff
    const added = next.filter(n => !previous.find(p => p.id === n.id)).map(i => `+${i.qty}x ${i.name}`);
    const removed = previous.filter(p => !next.find(n => n.id === p.id)).map(i => `-${i.qty}x ${i.name}`);
    const changed = next.filter(n => { const p = previous.find(pr => pr.id === n.id); return p && p.qty !== n.qty; })
      .map(i => { const p = previous.find(pr => pr.id === i.id); return `${i.name} ${p.qty}→${i.qty}`; });
    const diffParts = [...added, ...removed, ...changed];
    const diffStr = diffParts.length ? diffParts.join(', ') : 'sin cambios en productos';
    fetch('/api/movements', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'edit_order',
        description: `Edición comanda #${editingComandaId}: ${diffStr}`,
        user: currentUser.name,
        timestamp: new Date().toISOString(),
        data: JSON.stringify({ ticketNumber: editingComandaId, previousItems: previous, newItems: next })
      })
    });

    showToast(`Comanda #${editingComandaId} actualizada`, 'success');
    resetOrder();
    updateBadge();
    navigateTo('comandas');
  } catch (error) {
    console.error('Error updating comanda:', error);
    showToast('Error al actualizar comanda', 'error');
  }
}

function cancelEdit() {
  resetOrder();
  navigateTo('comandas');
}

function showTicket() {
  if (!currentOrder.items.length) {
    showToast('Agrega productos primero', 'error');
    return;
  }
  const totals = calculateTotals(currentOrder.items);
  const now = new Date();
  const restaurantName = esc(state.settings.restaurantName);
  const address = esc(state.settings.address || '');
  const phone = esc(state.settings.phone || '');
  const rfc = esc(state.settings.rfc || '');
  document.getElementById('ticketContent').innerHTML = `
    <div class="ticket-preview">
      ${renderTicketLogoMarkup()}
      <h3>${restaurantName.toUpperCase()}</h3>
      ${address ? `<div class="t-sub">${address}</div>` : ''}
      ${phone ? `<div class="t-sub">Tel. ${phone}</div>` : ''}
      ${rfc ? `<div class="t-sub">RFC ${rfc}</div>` : ''}
      <div class="t-sub">${formatShortDate(now)} · ${formatShortTime(now)}</div>
      <div class="t-div"></div>
      <div class="t-row"><span>${currentOrder.type === 'llevar' ? 'PARA LLEVAR' : `COMEDOR - ${esc(currentOrder.mesa)}`}</span><span>${currentOrder.type === 'llevar' ? 1 : currentOrder.comensales} pax</span></div>
      <div class="t-div"></div>
      ${currentOrder.items.map((item) => `
        <div class="t-row"><span>${item.qty}x ${esc(item.name)}</span><span>$${fmt(item.price * item.qty)}</span></div>
        ${item.variantLabel ? `<div class="t-footer" style="text-align:left">${esc(item.variantLabel)}</div>` : ''}
        ${item.isCombo && item.comboItems?.length ? item.comboItems.map(ci => `<div class="t-footer" style="text-align:left">• ${ci.qty}x ${esc(ci.name || '')}${ci.variantLabel ? ` (${esc(ci.variantLabel)})` : ''}</div>`).join('') : ''}
        ${item.notes ? `<div class="t-footer" style="text-align:left">Nota: ${esc(item.notes)}</div>` : ''}
      `).join('')}
      <div class="t-div"></div>
      <div class="t-row bold"><span>TOTAL</span><span>$${fmt(totals.total)} MXN</span></div>
      <div class="t-div"></div>
      <div class="t-footer">Atendido por: ${esc(currentUser.name)}</div>
      ${currentOrder.notes ? `<div class="t-footer">Notas: ${esc(currentOrder.notes)}</div>` : ''}
      <div class="t-footer">${esc(state.settings.ticketFooter || 'Gracias por su visita')}</div>
    </div>
  `;
  openModal('ticketModal');
}

function printTicket() {
  showToast('Ticket enviado a la impresora', 'success');
  closeModal('ticketModal');
}

// ===================== COMANDAS =====================
function buildComandas() {
  if (!state.commandas.length) {
    return `<div style="text-align:center;padding:90px 40px;color:var(--stone)">
      <div style="margin-bottom:20px;opacity:0.2"><svg width="80" height="80" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.1"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg></div>
      <div style="font-size:22px;font-weight:700;color:var(--charcoal);letter-spacing:-0.3px">Sin comandas pendientes</div>
      <div style="font-size:15px;margin-top:8px;color:var(--stone)">Las nuevas ordenes apareceran aqui automaticamente</div>
    </div>`;
  }
  const sorted = [...state.commandas].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  return `<div>
    <div class="page-header"><h2>Comandas Activas <span class="live-dot"></span></h2><span style="font-size:13px;color:var(--stone)">${sorted.length} pendiente(s)</span></div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(270px,1fr));gap:13px">
      ${sorted.map((comanda) => `
        <div class="comanda-card card" style="padding:17px;border-top:3px solid ${comanda.type === 'llevar' ? 'var(--amber)' : 'var(--accent)'}">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:9px">
            <span style="font-size:14px;font-weight:700;color:var(--sidebar-bg)">Orden <span class="order-num">#${comanda.ticketNumber}</span></span>
            <span class="badge ${comanda.type === 'llevar' ? 'badge-amber' : 'badge-green'}">${comanda.type === 'llevar' ? 'Para llevar' : esc(comanda.mesa)}</span>
          </div>
          <div style="margin-bottom:9px">
            <span class="badge badge-green" style="font-size:10px;letter-spacing:.5px;display:inline-flex;align-items:center;gap:5px"><span class="live-dot"></span>ACTIVO · En cocina</span>
          </div>
          <div style="font-size:11.5px;color:var(--stone);margin-bottom:8px">Hace ${minutesAgo(comanda.createdAt)} · ${esc(comanda.waiter)} · ${comanda.comensales} pax</div>
          <div style="border-top:1px solid var(--stone-pale);padding-top:8px;margin-bottom:8px">
            ${comanda.items.map((item) => `
              <div style="padding:2px 0;font-size:12.5px">
                <div style="display:flex;align-items:center;gap:8px"><span style="font-weight:700;color:var(--accent-dark);font-family:var(--mono);min-width:18px">${item.qty}x</span>${esc(item.name)}</div>
                ${item.variantLabel ? `<div style="font-size:11px;color:var(--stone);margin-left:26px">${esc(item.variantLabel)}</div>` : ''}
                ${item.isCombo && item.comboItems?.length ? `<div style="font-size:11px;color:var(--stone);margin-left:26px;line-height:1.7">${item.comboItems.map(ci => `• ${ci.qty}x ${esc(ci.name || '')}${ci.variantLabel ? ` (${esc(ci.variantLabel)})` : ''}`).join('<br>')}</div>` : ''}
                ${item.notes ? `<div style="font-size:11px;color:var(--accent-dark);margin-left:26px">Nota: ${esc(item.notes)}</div>` : ''}
              </div>
            `).join('')}
          </div>
          ${comanda.notes ? `<div style="font-size:11px;background:var(--accent-mist);color:var(--accent-dark);padding:5px 9px;border-radius:6px;margin-bottom:8px">${esc(comanda.notes)}</div>` : ''}
          <div style="display:flex;gap:7px">
            <button class="btn btn-secondary btn-sm" style="flex:1" onclick="editComanda(${comanda.id})">
              <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
              Editar
            </button>
            <button class="btn btn-primary btn-sm" style="flex:1" onclick="completeComanda(${comanda.id})">Completar</button>
            <button class="btn btn-danger btn-sm" onclick="cancelComanda(${comanda.id})">Cancelar</button>
          </div>
        </div>
      `).join('')}
    </div>
  </div>`;
}

function editComanda(id) {
  const comanda = state.commandas.find((entry) => entry.id === id);
  if (!comanda) return;
  editingComandaId = comanda.ticketNumber;
  currentOrder = {
    items: comanda.items.map((item) => ({ ...item })),
    type: comanda.type,
    mesa: comanda.type === 'llevar' ? 'Mostrador' : comanda.mesa,
    comensales: comanda.comensales,
    notes: comanda.notes,
  };
  navigateTo('pos');
}

// Al "Completar" se abre el modal de cobro (metodo de pago + cambio).
function completeComanda(id) {
  openPaymentModal(id);
}

let paymentDraft = null;
const PAYMENT_METHODS = ['Efectivo', 'Transferencia', 'Tarjeta'];

function openPaymentModal(id) {
  const comanda = state.commandas.find((c) => c.id === id);
  if (!comanda) return;
  const totals = calculateTotals(comanda.items);
  paymentDraft = {
    comandaId: id,
    total: totals.total,
    lines: [{ method: 'Efectivo', amount: Number(totals.total.toFixed(2)) }],
  };
  document.getElementById('paymentModal')?.remove();
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay open';
  overlay.id = 'paymentModal';
  overlay.innerHTML = `<div class="modal" style="width:460px;max-width:94vw">
    <div class="modal-header"><h3>Cobro · Comanda #${comanda.ticketNumber}</h3><button class="modal-close" onclick="this.closest('.modal-overlay').remove()">×</button></div>
    <div class="modal-body" style="padding:18px">
      <div style="text-align:center;margin-bottom:16px">
        <div style="font-size:11px;text-transform:uppercase;letter-spacing:1px;color:var(--stone)">Total a cobrar</div>
        <div style="font-size:34px;font-weight:800;color:var(--charcoal);font-family:var(--mono)">$${fmt(paymentDraft.total)}</div>
      </div>
      <div id="payLines"></div>
      <button id="payAddBtn" class="btn btn-secondary btn-sm btn-full" style="margin-bottom:14px" onclick="paymentAddLine()">+ Agregar metodo de pago</button>
      <div style="background:var(--surface-alt);border-radius:var(--r);padding:12px 14px;font-size:13px">
        <div style="display:flex;justify-content:space-between;margin-bottom:4px"><span>Pagado</span><span id="payPagado" style="font-weight:700;font-family:var(--mono)">$0.00</span></div>
        <div style="display:flex;justify-content:space-between;margin-bottom:4px"><span>Restante</span><span id="payRestante" style="font-weight:700;font-family:var(--mono)">$0.00</span></div>
        <div style="display:flex;justify-content:space-between"><span style="font-weight:700">Cambio</span><span id="payCambio" style="font-weight:800;font-family:var(--mono);color:var(--accent-dark);font-size:15px">$0.00</span></div>
      </div>
      <div style="display:flex;gap:8px;margin-top:16px">
        <button class="btn btn-secondary" style="flex:1" onclick="this.closest('.modal-overlay').remove()">Cancelar</button>
        <button id="payConfirmBtn" class="btn btn-primary" style="flex:2" onclick="confirmPayment()">Confirmar y completar</button>
      </div>
    </div>
  </div>`;
  document.body.appendChild(overlay);
  renderPaymentLines();
  paymentRecalc();
}

function renderPaymentLines() {
  const container = document.getElementById('payLines');
  if (!container || !paymentDraft) return;
  container.innerHTML = paymentDraft.lines.map((line, i) => `
    <div style="display:flex;gap:7px;margin-bottom:8px;align-items:center">
      <select onchange="paymentRecalc()" id="payMethod${i}" style="flex:1;border:1px solid var(--stone-pale);border-radius:var(--r);padding:8px;font-size:13px;background:var(--surface);color:var(--charcoal)">
        ${PAYMENT_METHODS.map((m) => `<option value="${m}" ${m === line.method ? 'selected' : ''}>${m}</option>`).join('')}
      </select>
      <div style="position:relative;flex:1">
        <span style="position:absolute;left:9px;top:50%;transform:translateY(-50%);color:var(--stone);font-size:13px">$</span>
        <input type="number" min="0" step="0.01" id="payAmt${i}" value="${line.amount != null ? line.amount : ''}" oninput="paymentRecalc()" style="width:100%;border:1px solid var(--stone-pale);border-radius:var(--r);padding:8px 8px 8px 20px;font-size:13px;font-family:var(--mono);background:var(--surface);color:var(--charcoal)">
      </div>
      ${paymentDraft.lines.length > 1 ? `<button class="btn btn-danger btn-sm" onclick="paymentRemoveLine(${i})" style="padding:6px 9px">×</button>` : ''}
    </div>
  `).join('');
}

function paymentSyncFromDOM() {
  if (!paymentDraft) return;
  paymentDraft.lines.forEach((line, i) => {
    const m = document.getElementById(`payMethod${i}`);
    const a = document.getElementById(`payAmt${i}`);
    if (m) line.method = m.value;
    if (a) line.amount = a.value === '' ? null : parseFloat(a.value);
  });
}

function paymentAddLine() {
  if (!paymentDraft || paymentDraft.lines.length >= 3) return;
  paymentSyncFromDOM();
  const paid = paymentDraft.lines.reduce((s, l) => s + (parseFloat(l.amount) || 0), 0);
  const remaining = Math.max(0, paymentDraft.total - paid);
  const used = paymentDraft.lines.map((l) => l.method);
  const nextMethod = PAYMENT_METHODS.find((m) => !used.includes(m)) || 'Efectivo';
  paymentDraft.lines.push({ method: nextMethod, amount: remaining ? Number(remaining.toFixed(2)) : null });
  renderPaymentLines();
  paymentRecalc();
}

function paymentRemoveLine(i) {
  if (!paymentDraft) return;
  paymentSyncFromDOM();
  paymentDraft.lines.splice(i, 1);
  renderPaymentLines();
  paymentRecalc();
}

function paymentRecalc() {
  if (!paymentDraft) return;
  paymentSyncFromDOM();
  const paid = paymentDraft.lines.reduce((s, l) => s + (parseFloat(l.amount) || 0), 0);
  const remaining = Math.max(0, paymentDraft.total - paid);
  const change = Math.max(0, paid - paymentDraft.total);
  const pagadoEl = document.getElementById('payPagado');
  const restEl = document.getElementById('payRestante');
  const cambioEl = document.getElementById('payCambio');
  if (pagadoEl) pagadoEl.textContent = `$${fmt(paid)}`;
  if (restEl) { restEl.textContent = `$${fmt(remaining)}`; restEl.style.color = remaining > 0.001 ? 'var(--rose)' : 'var(--stone)'; }
  if (cambioEl) cambioEl.textContent = `$${fmt(change)}`;
  const addBtn = document.getElementById('payAddBtn');
  if (addBtn) addBtn.style.display = paymentDraft.lines.length >= 3 ? 'none' : 'block';
  const confirmBtn = document.getElementById('payConfirmBtn');
  if (confirmBtn) confirmBtn.disabled = remaining > 0.001;
}

async function confirmPayment() {
  if (!paymentDraft) return;
  paymentSyncFromDOM();
  const paid = paymentDraft.lines.reduce((s, l) => s + (parseFloat(l.amount) || 0), 0);
  if (paid + 0.001 < paymentDraft.total) {
    showToast('El pago no cubre el total', 'error');
    return;
  }
  const change = Math.max(0, paid - paymentDraft.total);
  const payments = paymentDraft.lines
    .filter((l) => (parseFloat(l.amount) || 0) > 0)
    .map((l) => ({ method: l.method, amount: Number((parseFloat(l.amount) || 0).toFixed(2)) }));
  const methodSummary = [...new Set(payments.map((p) => p.method))].join(' + ') || 'Efectivo';
  const cashReceived = payments.filter((p) => p.method === 'Efectivo').reduce((s, p) => s + p.amount, 0);
  const paymentInfo = {
    paymentMethod: methodSummary,
    payments,
    amountReceived: cashReceived || null,
    change: Number(change.toFixed(2)),
  };
  const id = paymentDraft.comandaId;
  document.getElementById('paymentModal')?.remove();
  paymentDraft = null;
  await finalizeSale(id, paymentInfo);
}

async function finalizeSale(id, paymentInfo) {
  const index = state.commandas.findIndex((comanda) => comanda.id === id);
  if (index === -1) return;
  const comanda = state.commandas[index];
  const totals = calculateTotals(comanda.items);
  const saleData = {
    ticketNumber: comanda.ticketNumber,
    ticketDate: comanda.ticketDate,
    createdAt: comanda.createdAt,
    completedAt: new Date().toISOString(),
    type: comanda.type,
    mesa: comanda.type === 'llevar' ? 'Mostrador' : comanda.mesa,
    comensales: comanda.comensales,
    notes: comanda.notes,
    waiter: comanda.waiter,
    paymentMethod: paymentInfo.paymentMethod,
    payments: paymentInfo.payments,
    amountReceived: paymentInfo.amountReceived,
    change: paymentInfo.change,
    status: 'Pagado',
    items: comanda.items.map((item) => ({ ...item })),
    subtotal: totals.subtotal,
    tax: totals.tax,
    total: totals.total,
    cost: totals.cost,
  };
  try {
    const saleRes = await fetch('/api/sales', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(saleData)
    });
    const saleJson = await saleRes.json();
    if (!saleRes.ok) throw new Error(saleJson.error || 'Error al guardar venta');
    if (saleJson.id) saleData.id = saleJson.id;
    await fetch(`/api/orders/${id}`, { method: 'DELETE' });
    state.salesRecords.unshift(saleData);
    state.commandas.splice(index, 1);
    if (editingComandaId === comanda.ticketNumber) {
      resetOrder();
    }
    updateBadge();
    renderPage('comandas');
    const changeMsg = paymentInfo.change > 0 ? ` · Cambio $${fmt(paymentInfo.change)}` : '';
    showToast(`Comanda #${comanda.ticketNumber} cobrada (${paymentInfo.paymentMethod})${changeMsg}`, 'success');
  } catch (error) {
    console.error('Error completing comanda:', error);
    showToast('Error al completar comanda', 'error');
  }
}

async function cancelComanda(id) {
  const index = state.commandas.findIndex((comanda) => comanda.id === id);
  if (index === -1) return;
  const comanda = state.commandas[index];
  comanda.items.forEach((item) => {
    const product = productById(item.id);
    if (product) product.stock += item.qty;
  });
  try {
    await fetch(`/api/orders/${id}`, { method: 'DELETE' });

    // Save as cancelled sale so it's visible in the sales report
    const totals = calculateTotals(comanda.items);
    const saleData = {
      ticketNumber: comanda.ticketNumber,
      ticketDate: comanda.ticketDate,
      createdAt: comanda.createdAt,
      completedAt: new Date().toISOString(),
      type: comanda.type,
      mesa: comanda.type === 'llevar' ? 'Mostrador' : comanda.mesa,
      comensales: comanda.comensales,
      notes: comanda.notes,
      waiter: comanda.waiter,
      paymentMethod: '—',
      status: 'Cancelado',
      items: comanda.items,
      subtotal: totals.subtotal,
      tax: totals.tax,
      total: totals.total,
      cost: totals.cost,
    };
    const saleRes = await fetch('/api/sales', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(saleData)
    });
    const saleJson = await saleRes.json();
    if (saleJson.id) saleData.id = saleJson.id;
    state.salesRecords.unshift(saleData);

    // Log with product detail
    const itemList = comanda.items.map(i => `${i.qty}x ${i.name}`).join(', ');
    await fetch('/api/movements', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'cancel_order',
        description: `Cancelación de comanda #${comanda.ticketNumber}: ${itemList}`,
        user: currentUser.name,
        timestamp: new Date().toISOString(),
        data: JSON.stringify({ ticketNumber: comanda.ticketNumber, mesa: comanda.mesa, type: comanda.type, items: comanda.items })
      })
    });

    // Update stock in API
    for (const item of comanda.items) {
      const product = productById(item.id);
      if (product) {
        await fetch(`/api/products/${item.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ stock: product.stock })
        });
      }
    }
    state.commandas.splice(index, 1);
    if (editingComandaId === comanda.ticketNumber) {
      resetOrder();
    }
    updateBadge();
    renderPage('comandas');
    showToast(`Comanda #${comanda.ticketNumber} cancelada`, 'success');
  } catch (error) {
    console.error('Error canceling comanda:', error);
    showToast('Error al cancelar comanda', 'error');
  }
}

// ===================== PRODUCTS =====================
function buildProducts() {
  if (currentUser.role !== 'owner') return restricted();
  const filtered = state.products.filter((product) => (
    !productSearch
    || product.name.toLowerCase().includes(productSearch.toLowerCase())
    || product.cat.toLowerCase().includes(productSearch.toLowerCase())
  ));
  return `<div>
    <div class="page-header">
      <h2>Gestion de Productos</h2>
      <button class="btn btn-primary" onclick="openProductModal()">
        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
        Agregar producto
      </button>
    </div>
    <div class="filter-row">
      <div class="search-bar" style="max-width:280px">
        <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><path stroke-linecap="round" d="M21 21l-4.35-4.35"/></svg>
        <input type="text" placeholder="Buscar producto o categoria..." value="${esc(productSearch)}" oninput="productSearch=this.value;navigateTo('products')">
      </div>
      <span style="font-size:12.5px;color:var(--stone)">${filtered.length} producto(s) · ${state.products.length} total</span>
    </div>
    ${filtered.length === 0 ? `<div style="text-align:center;padding:50px;color:var(--stone)"><p style="font-size:14px;font-weight:600">No hay productos aun</p><p style="font-size:13px;margin-top:4px">Agrega el primero con el boton de arriba</p></div>` : `
    <table class="data-table">
      <thead><tr><th>Nombre</th><th>Categoria</th><th>Precio MXN</th><th>Costo MXN</th><th>Margen</th><th>Stock</th><th>Acciones</th></tr></thead>
      <tbody>${filtered.map((product) => {
        const margin = product.price > 0 ? (((product.price - product.cost) / product.price) * 100).toFixed(0) : '0';
        const badge = product.stock === 0 ? 'badge-red' : product.stock < 10 ? 'badge-amber' : 'badge-green';
        return `<tr>
          <td><div style="display:flex;align-items:center;gap:10px"><div style="width:32px;height:32px;background:var(--accent-mist);border-radius:7px;display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--accent-dark)">${CAT_ICONS[product.cat] || DEFAULT_ICON}</div><strong>${esc(product.name)}</strong></div></td>
          <td><span class="badge badge-sky">${esc(product.cat)}</span></td>
          <td style="font-family:var(--mono);font-weight:700;color:var(--accent-dark)">$${fmt(product.price)}</td>
          <td style="font-family:var(--mono);color:var(--stone)">$${fmt(product.cost)}</td>
          <td><span class="profit-badge profit-up">↑ ${margin}%</span></td>
          <td><span class="badge ${badge}">${product.stock} uds</span></td>
          <td><div style="display:flex;gap:6px">
            <button class="btn btn-amber btn-sm" onclick="openProductModal(${product.id})">Editar</button>
            <button class="btn btn-danger btn-sm" onclick="deleteProduct(${product.id})">Eliminar</button>
          </div></td>
        </tr>`;
      }).join('')}</tbody>
    </table>`}
  </div>`;
}

function openProductModal(id) {
  const product = id ? productById(id) : null;
  document.getElementById('pModalTitle').textContent = product ? 'Editar Producto' : 'Agregar Producto';
  document.getElementById('pModalSub').textContent = product ? `Editando: ${product.name}` : 'Completa los datos del nuevo producto';
  document.getElementById('pName').value = product?.name || '';
  document.getElementById('pPrice').value = product?.price || '';
  document.getElementById('pCost').value = product?.cost || '';
  document.getElementById('pStock').value = product?.stock ?? '';
  document.getElementById('pEditId').value = product?.id || '';
  const categorySelect = document.getElementById('pCat');
  categorySelect.innerHTML = state.categories.map((category) => `
    <option value="${esc(category.name)}">${esc(category.name)}</option>
  `).join('');
  categorySelect.value = product?.cat || state.categories[0]?.name || '';
  const variants = Array.isArray(product?.variants) ? product.variants.map(g => ({
    name: g.name || '',
    minSelect: Number(g.minSelect) || 0,
    maxSelect: Number(g.maxSelect) || 1,
    options: Array.isArray(g.options) ? g.options.map(o => ({ name: o.name || '', priceDelta: Number(o.priceDelta) || 0 })) : [],
  })) : [];
  window.productVariantBuilder = variants;
  renderProductVariantGroups();
  openModal('productModal');
}

function renderProductVariantGroups() {
  const container = document.getElementById('pVariantGroups');
  if (!container) return;
  const groups = window.productVariantBuilder || [];
  if (groups.length === 0) {
    container.innerHTML = `<div style="text-align:center;padding:14px 8px;color:var(--stone);font-size:12px">Sin variantes. Pulsa "Grupo de variante" para agregar opciones (ej. tamaño, guisos, salsas).</div>`;
    return;
  }
  container.innerHTML = groups.map((group, gi) => `
    <div class="variant-group">
      <div class="vg-top">
        <div class="vg-name">
          <span class="vg-mini-label">Nombre del grupo</span>
          <input type="text" value="${esc(group.name)}" placeholder="Ej. Guiso, Tamaño, Salsa" oninput="updateVariantGroup(${gi}, 'name', this.value)">
        </div>
        <div class="vg-minmax">
          <div class="vg-num-input">
            <span class="vg-mini-label">Mín.</span>
            <input type="number" min="0" value="${group.minSelect}" oninput="updateVariantGroup(${gi}, 'minSelect', this.value)">
          </div>
          <div class="vg-num-input">
            <span class="vg-mini-label">Máx.</span>
            <input type="number" min="1" value="${group.maxSelect}" oninput="updateVariantGroup(${gi}, 'maxSelect', this.value)">
          </div>
        </div>
        <button type="button" class="vg-remove" onclick="removeVariantGroup(${gi})" title="Eliminar grupo">
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M1 7h22M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3"/></svg>
        </button>
      </div>
      <div class="vg-options">
        ${group.options.map((opt, oi) => `
          <div class="vg-option">
            <input type="text" value="${esc(opt.name)}" placeholder="Nombre de la opción" oninput="updateVariantOption(${gi}, ${oi}, 'name', this.value)">
            <input type="number" step="0.5" class="vg-opt-price" value="${opt.priceDelta}" placeholder="+\$" oninput="updateVariantOption(${gi}, ${oi}, 'priceDelta', this.value)" title="Diferencia de precio (puede ser 0 o negativa)">
            <button type="button" class="vg-option-rm" onclick="removeVariantOption(${gi}, ${oi})" title="Eliminar opción">×</button>
          </div>
        `).join('')}
        <button type="button" class="vg-add-opt" onclick="addVariantOption(${gi})">+ Agregar opción</button>
      </div>
    </div>
  `).join('');
}

function addVariantGroup() {
  if (!Array.isArray(window.productVariantBuilder)) window.productVariantBuilder = [];
  window.productVariantBuilder.push({
    name: '',
    minSelect: 1,
    maxSelect: 1,
    options: [{ name: '', priceDelta: 0 }, { name: '', priceDelta: 0 }],
  });
  renderProductVariantGroups();
}

function removeVariantGroup(index) {
  if (!Array.isArray(window.productVariantBuilder)) return;
  window.productVariantBuilder.splice(index, 1);
  renderProductVariantGroups();
}

function updateVariantGroup(index, field, value) {
  const group = window.productVariantBuilder?.[index];
  if (!group) return;
  if (field === 'minSelect' || field === 'maxSelect') {
    group[field] = Math.max(field === 'minSelect' ? 0 : 1, Number(value) || 0);
  } else {
    group[field] = value;
  }
}

function addVariantOption(groupIndex) {
  const group = window.productVariantBuilder?.[groupIndex];
  if (!group) return;
  group.options.push({ name: '', priceDelta: 0 });
  renderProductVariantGroups();
}

function removeVariantOption(groupIndex, optIndex) {
  const group = window.productVariantBuilder?.[groupIndex];
  if (!group) return;
  group.options.splice(optIndex, 1);
  renderProductVariantGroups();
}

function updateVariantOption(groupIndex, optIndex, field, value) {
  const opt = window.productVariantBuilder?.[groupIndex]?.options?.[optIndex];
  if (!opt) return;
  if (field === 'priceDelta') opt.priceDelta = Number(value) || 0;
  else opt[field] = value;
}

function collectProductVariants() {
  const groups = Array.isArray(window.productVariantBuilder) ? window.productVariantBuilder : [];
  return groups
    .map(g => ({
      name: (g.name || '').trim(),
      minSelect: Math.max(0, Number(g.minSelect) || 0),
      maxSelect: Math.max(1, Number(g.maxSelect) || 1),
      options: (g.options || [])
        .filter(o => (o.name || '').trim() !== '')
        .map(o => ({ name: o.name.trim(), priceDelta: Number(o.priceDelta) || 0 })),
    }))
    .filter(g => g.name && g.options.length > 0);
}

async function saveProduct() {
  const id = document.getElementById('pEditId').value;
  const data = {
    name: document.getElementById('pName').value.trim(),
    price: toMoney(document.getElementById('pPrice').value),
    cost: toMoney(document.getElementById('pCost').value),
    cat: document.getElementById('pCat').value,
    stock: toInt(document.getElementById('pStock').value),
    variants: collectProductVariants(),
  };

  if (!data.name || data.price <= 0) {
    showToast('Completa nombre y precio valido', 'error');
    return;
  }
  if (data.cost > data.price) {
    showToast('El costo no puede ser mayor al precio', 'error');
    return;
  }
  for (const group of data.variants) {
    if (group.minSelect > group.maxSelect) {
      showToast(`En "${group.name}" el mínimo no puede ser mayor al máximo`, 'error');
      return;
    }
    if (group.maxSelect > group.options.length) {
      showToast(`"${group.name}" no tiene suficientes opciones para máx. ${group.maxSelect}`, 'error');
      return;
    }
  }

  try {
    if (id) {
      await fetch(`/api/products/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const index = state.products.findIndex((product) => product.id === Number(id));
      if (index !== -1) {
        state.products[index] = { ...state.products[index], ...data };
      }
      showToast(`"${data.name}" actualizado`, 'success');
    } else {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const { id: newId } = await res.json();
      data.id = newId;
      state.products.push(data);
      showToast(`"${data.name}" agregado`, 'success');
    }
    closeModal('productModal');
    navigateTo('products');
  } catch (error) {
    console.error('Error saving product:', error);
    showToast('Error al guardar producto', 'error');
  }
}

async function deleteProduct(id) {
  const product = productById(id);
  if (!product) return;
  const isInUse = state.commandas.some((comanda) => comanda.items.some((item) => item.id === id));
  if (isInUse) {
    showToast('No puedes eliminar un producto en una comanda activa', 'error');
    return;
  }
  if (!confirm(`¿Eliminar "${product.name}"?`)) return;
  try {
    await fetch(`/api/products/${id}`, { method: 'DELETE' });
    state.products = state.products.filter((entry) => entry.id !== id);
    showToast('Producto eliminado', 'success');
    navigateTo('products');
  } catch (error) {
    console.error('Error deleting product:', error);
    showToast('Error al eliminar producto', 'error');
  }
}

// ===================== CATEGORIES =====================
function buildCategories() {
  if (currentUser.role !== 'owner') return restricted();
  return `<div>
    <div class="page-header">
      <h2>Gestión de Categorías</h2>
      <button class="btn btn-primary" onclick="openCategoryModal()">
        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
        Agregar categoría
      </button>
    </div>
    <table class="data-table">
      <thead><tr><th>Nombre</th><th>Productos</th><th>Acciones</th></tr></thead>
      <tbody>${state.categories.map((category) => {
        const productCount = state.products.filter(p => p.cat === category.name).length;
        return `<tr>
          <td><strong>${esc(category.name)}</strong></td>
          <td>${productCount} productos</td>
          <td><div style="display:flex;gap:6px">
            <button class="btn btn-amber btn-sm" onclick="openCategoryModal(${category.id})">Editar</button>
            <button class="btn btn-danger btn-sm" onclick="deleteCategory(${category.id})">Eliminar</button>
          </div></td>
        </tr>`;
      }).join('')}</tbody>
    </table>
  </div>`;
}

function openCategoryModal(id = null) {
  const category = id ? state.categories.find(c => c.id === id) : null;
  const modal = document.createElement('div');
  modal.className = 'modal-overlay open';
  modal.dataset.modalType = 'category';
  modal.innerHTML = `<div class="modal">
    <div class="modal-header">
      <h3>${category ? 'Editar' : 'Agregar'} Categoría</h3>
      <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">×</button>
    </div>
    <div class="modal-body">
      <div class="form-group">
        <label>Nombre de la categoría</label>
        <input type="text" id="catName" value="${category ? esc(category.name) : ''}" placeholder="Ej. Platos Fuertes">
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="this.closest('.modal-overlay').remove()">Cancelar</button>
      <button class="btn btn-primary" onclick="saveCategory(${id || 'null'})">Guardar</button>
    </div>
  </div>`;
  document.body.appendChild(modal);
  document.getElementById('catName').focus();
}

async function saveCategory(id) {
  const name = document.getElementById('catName').value.trim();
  if (!name) {
    showToast('El nombre es requerido', 'error');
    return;
  }
  try {
    if (id) {
      await fetch(`/api/categories/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name })
      });
      const category = state.categories.find(c => c.id === id);
      if (category) category.name = name;
    } else {
      const res = await fetch('/api/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name })
      });
      const newCat = await res.json();
      state.categories.push(newCat);
    }
    document.querySelector('.modal-overlay[data-modal-type="category"]').remove();
    renderPage('categories');
    showToast('Categoría guardada', 'success');
  } catch (error) {
    console.error('Error saving category:', error);
    showToast('Error al guardar categoría', 'error');
  }
}

async function deleteCategory(id) {
  if (!confirm('¿Eliminar esta categoría? Los productos en esta categoría no se eliminarán.')) return;
  try {
    await fetch(`/api/categories/${id}`, { method: 'DELETE' });
    state.categories = state.categories.filter(c => c.id !== id);
    renderPage('categories');
    showToast('Categoría eliminada', 'success');
  } catch (error) {
    console.error('Error deleting category:', error);
    showToast('Error al eliminar categoría', 'error');
  }
}

function buildCombos() {
  if (currentUser.role !== 'owner') return restricted();
  return `<div>
    <div class="page-header">
      <h2>Gestión de Combos</h2>
      <button class="btn btn-primary" onclick="openComboModal()">
        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
        Agregar combo
      </button>
    </div>
    <table class="data-table">
      <thead><tr><th>Nombre</th><th>Precio</th><th>Artículos</th><th>Acciones</th></tr></thead>
      <tbody>${state.combos.map((combo) => `
        <tr>
          <td><strong>${esc(combo.name)}</strong><div class="mi-desc" style="margin-top:4px">${esc(combo.description || '')}</div></td>
          <td>$${fmt(combo.price)} MXN</td>
          <td>${combo.items?.length || 0}</td>
          <td><div style="display:flex;gap:6px">
            <button class="btn btn-amber btn-sm" onclick="openComboModal(${combo.id})">Editar</button>
            <button class="btn btn-danger btn-sm" onclick="deleteCombo(${combo.id})">Eliminar</button>
          </div></td>
        </tr>
      `).join('')}</tbody>
    </table>
  </div>`;
}

function openComboModal(id = null) {
  const combo = id ? state.combos.find(c => c.id === id) : null;
  window.comboBuilderState = {
    id: combo?.id || null,
    name: combo?.name || '',
    price: combo?.price || 0,
    description: combo?.description || '',
    items: combo?.items ? combo.items.map((item) => ({ ...item })) : [],
  };
  const productOptions = state.products.map((product) => `<option value="${product.id}">${esc(product.name)}</option>`).join('');
  const modal = document.createElement('div');
  modal.className = 'modal-overlay open';
  modal.dataset.modalType = 'combo';
  modal.innerHTML = `<div class="modal modal-large">
    <div class="modal-header">
      <h3>${combo ? 'Editar' : 'Agregar'} Combo</h3>
      <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">×</button>
    </div>
    <div class="modal-body">
      <div class="form-group">
        <label>Nombre del combo</label>
        <input type="text" id="comboName" value="${esc(window.comboBuilderState.name)}" placeholder="Ej. Combo Familiar">
      </div>
      <div class="form-group">
        <label>Descripción</label>
        <input type="text" id="comboDesc" value="${esc(window.comboBuilderState.description)}" placeholder="Opcional">
      </div>
      <div class="form-row">
        <div class="form-group" style="flex:3">
          <label>Producto</label>
          <select class="form-select" id="comboProductSelect">${productOptions}</select>
        </div>
        <div class="form-group" style="flex:1">
          <label>Cantidad</label>
          <input class="form-input" id="comboProductQty" type="number" min="1" value="1">
        </div>
        <div class="form-group" style="flex:1;align-self:flex-end;">
          <button class="btn btn-primary btn-full" onclick="addComboItem()">Agregar ítem</button>
        </div>
      </div>
      <div id="comboItemsList" class="combo-items-list"></div>
      <div class="form-group">
        <label>Precio total (MXN)</label>
        <input class="form-input" id="comboPrice" type="number" min="0" value="${esc(window.comboBuilderState.price)}">
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="this.closest('.modal-overlay').remove()">Cancelar</button>
      <button class="btn btn-primary" onclick="saveCombo(${id || 'null'})">Guardar combo</button>
    </div>
  </div>`;
  document.body.appendChild(modal);
  renderComboBuilderItems();
}

function renderComboBuilderItems() {
  const list = document.getElementById('comboItemsList');
  if (!list) return;
  if (!window.comboBuilderState.items.length) {
    list.innerHTML = `<div class="empty-state" style="padding:20px;text-align:center;color:var(--stone)">Agrega los productos que formen parte de este combo</div>`;
    return;
  }
  list.innerHTML = window.comboBuilderState.items.map((item, index) => {
    const product = productById(item.id);
    return `<div class="combo-item-row">
      <div><strong>${esc(product?.name || item.name)}</strong></div>
      <div style="display:flex;align-items:center;gap:10px">
        <span>Cantidad: ${item.qty}</span>
        <button class="btn btn-danger btn-sm" onclick="removeComboItem(${index})">Eliminar</button>
      </div>
    </div>`;
  }).join('');
}

function addComboItem() {
  const productId = Number(document.getElementById('comboProductSelect').value);
  const qty = Math.max(1, Number(document.getElementById('comboProductQty').value) || 1);
  const product = productById(productId);
  if (!product) return showToast('Selecciona un producto válido', 'error');
  const existing = window.comboBuilderState.items.find(item => item.id === productId);
  if (existing) existing.qty += qty;
  else window.comboBuilderState.items.push({ id: productId, qty, name: product.name });
  renderComboBuilderItems();
}

function removeComboItem(index) {
  window.comboBuilderState.items.splice(index, 1);
  renderComboBuilderItems();
}

async function saveCombo(id) {
  const name = document.getElementById('comboName').value.trim();
  const description = document.getElementById('comboDesc').value.trim();
  const price = Number(document.getElementById('comboPrice').value) || 0;
  const items = window.comboBuilderState.items.map(item => ({
    id: item.id,
    qty: item.qty,
    name: item.name || productById(item.id)?.name || '',
  }));
  if (!name) return showToast('El nombre del combo es requerido', 'error');
  if (!items.length) return showToast('Agrega al menos un producto al combo', 'error');
  try {
    const payload = { name, description, price, items };
    const res = await fetch(id ? `/api/combos/${id}` : '/api/combos', {
      method: id ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const result = await res.json();
    const updatedCombo = { id: id || result.id, name, description, price, items };
    if (id) {
      const index = state.combos.findIndex((combo) => combo.id === id);
      if (index !== -1) state.combos[index] = updatedCombo;
    } else {
      state.combos.push(updatedCombo);
    }
    document.querySelector('.modal-overlay[data-modal-type="combo"]').remove();
    renderPage('combos');
    showToast('Combo guardado', 'success');
  } catch (error) {
    console.error('Error saving combo:', error);
    showToast('Error al guardar combo', 'error');
  }
}

async function deleteCombo(id) {
  if (!confirm('¿Eliminar este combo?')) return;
  try {
    await fetch(`/api/combos/${id}`, { method: 'DELETE' });
    state.combos = state.combos.filter((combo) => combo.id !== id);
    renderPage('combos');
    showToast('Combo eliminado', 'success');
  } catch (error) {
    console.error('Error deleting combo:', error);
    showToast('Error al eliminar combo', 'error');
  }
}

// ===================== INVENTORY =====================
function buildInventory() {
  if (currentUser.role !== 'owner') return restricted();
  if (!state.products.length) {
    return `<div>
      <div class="page-header"><h2>Control de Inventario</h2></div>
      <div style="text-align:center;padding:60px;color:var(--stone)">
        <p style="font-size:14px;font-weight:600">Sin productos registrados</p>
        <p style="font-size:13px;margin-top:4px">Agrega productos desde la seccion <strong>Productos</strong> para gestionar el inventario.</p>
      </div>
    </div>`;
  }
  return `<div>
    <div class="page-header">
      <h2>Control de Inventario</h2>
      <span style="font-size:13px;color:var(--stone)">${state.products.length} producto(s) registrado(s)</span>
    </div>
    <table class="data-table">
      <thead><tr><th>Producto</th><th>Categoria</th><th>Stock Actual</th><th>Nivel</th><th>Ajuste rapido</th></tr></thead>
      <tbody>${state.products.map((product) => {
        const pct = Math.min(100, (product.stock / 100) * 100);
        const level = pct > 50 ? 'high' : pct > 20 ? 'mid' : 'low';
        const badge = pct > 50 ? 'badge-green' : pct > 20 ? 'badge-amber' : 'badge-red';
        const label = pct > 50 ? 'Bueno' : pct > 20 ? 'Bajo' : 'Critico';
        return `<tr>
          <td><div style="display:flex;align-items:center;gap:9px"><div style="width:30px;height:30px;background:var(--accent-mist);border-radius:7px;display:flex;align-items:center;justify-content:center;color:var(--accent-dark)">${CAT_ICONS[product.cat] || DEFAULT_ICON}</div><strong>${esc(product.name)}</strong></div></td>
          <td><span class="badge badge-sky">${esc(product.cat)}</span></td>
          <td><span class="badge ${badge}" style="font-family:var(--mono)">${product.stock} uds</span></td>
          <td style="width:170px">
            <div class="inv-bar"><div class="inv-fill ${level}" style="width:${pct}%"></div></div>
            <div style="font-size:10px;color:var(--stone);margin-top:2px">${label}</div>
          </td>
          <td>
            <div class="stock-adj">
              <button class="sadj-btn" onclick="adjustStock1(${product.id},-1)">-</button>
              <input class="sadj-input" id="sadj-${product.id}" type="number" value="1" min="1">
              <button class="sadj-btn" onclick="adjustStock1(${product.id},1)">+</button>
              <button class="sadj-apply" onclick="applyAdj(${product.id})">Aplicar</button>
            </div>
          </td>
        </tr>`;
      }).join('')}</tbody>
    </table>
  </div>`;
}

async function adjustStock1(id, delta) {
  const product = productById(id);
  if (!product) return;
  product.stock = Math.max(0, product.stock + delta);
  try {
    await fetch(`/api/products/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ stock: product.stock })
    });
    showToast(`${product.name}: ${product.stock} uds`, 'success');
    navigateTo('inventory');
  } catch (error) {
    console.error('Error updating stock:', error);
    showToast('Error al actualizar stock', 'error');
  }
}

async function applyAdj(id) {
  const input = document.getElementById(`sadj-${id}`);
  const qty = Math.max(1, toInt(input?.value));
  const product = productById(id);
  if (!product) return;
  product.stock = Math.max(0, product.stock + qty);
  try {
    await fetch(`/api/products/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ stock: product.stock })
    });
    showToast(`${product.name}: +${qty} -> ${product.stock} uds`, 'success');
    navigateTo('inventory');
  } catch (error) {
    console.error('Error updating stock:', error);
    showToast('Error al actualizar stock', 'error');
  }
}

// ===================== USERS =====================
function buildUsers() {
  if (currentUser.role !== 'owner') return restricted();
  const allUsers = [
    {
      name: state.owner.name,
      email: state.owner.email,
      role: 'Propietario',
      status: 'Activo',
      since: '2024-01-15',
      isDefault: true,
    },
    ...state.employees,
  ];
  return `<div>
    <div class="page-header"><h2>Gestion de Usuarios</h2>
      <button class="btn btn-primary" onclick="openAddEmployeeModal()">
        <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
        Agregar empleado
      </button>
    </div>
    <table class="data-table">
      <thead><tr><th>Nombre</th><th>Correo</th><th>Rol</th><th>Estado</th><th>Desde</th><th>Acciones</th></tr></thead>
      <tbody>${allUsers.map((user) => `<tr>
        <td><strong>${esc(user.name)}</strong></td>
        <td style="color:var(--stone);font-size:12px">${esc(user.email)}</td>
        <td><span class="badge ${user.role === 'Propietario' ? 'badge-green' : user.role === 'Cajero' ? 'badge-sky' : 'badge-amber'}">${esc(user.role)}</span></td>
        <td><span class="badge ${user.status === 'Activo' ? 'badge-green' : 'badge-red'}">${esc(user.status)}</span></td>
        <td style="color:var(--stone);font-size:12px">${esc(user.since)}</td>
        <td><div style="display:flex;gap:6px">
          ${user.role === 'Propietario' ? '<span style="font-size:12px;color:var(--stone)">Propietario</span>' : `
            <button class="btn btn-amber btn-sm" onclick="openEditEmployeeModal(${jsv(user.email)})">Editar</button>
            <button class="btn btn-danger btn-sm" onclick="openDeleteConfirm(${jsv(user.email)},${jsv(user.name)})">Eliminar</button>
          `}
        </div></td>
      </tr>`).join('')}</tbody>
    </table>
    ${state.employees.length === 0 ? `<div style="text-align:center;padding:40px;color:var(--stone)">
      <p>No hay empleados registrados. <strong style="cursor:pointer;color:var(--accent)" onclick="openAddEmployeeModal()">Agregar el primero -></strong></p>
    </div>` : ''}
  </div>`;
}

function openAddEmployeeModal() {
  document.getElementById('muTitle').textContent = 'Agregar empleado';
  document.getElementById('muSub').textContent = 'Crea una nueva cuenta de empleado';
  document.getElementById('muName').value = '';
  document.getElementById('muEmail').value = '';
  document.getElementById('muRole').value = 'Mesero';
  document.getElementById('muPass').value = '';
  document.getElementById('muEditEmail').value = '';
  hideUserError();
  openModal('manageUsersModal');
}

function openEditEmployeeModal(email) {
  const employee = getEmployeeByEmail(email);
  if (!employee) return;
  document.getElementById('muTitle').textContent = 'Editar empleado';
  document.getElementById('muSub').textContent = `Actualiza la cuenta de ${employee.name}`;
  document.getElementById('muName').value = employee.name;
  document.getElementById('muEmail').value = employee.email;
  document.getElementById('muRole').value = employee.role;
  document.getElementById('muPass').value = employee.pass;
  document.getElementById('muEditEmail').value = employee.email;
  hideUserError();
  openModal('manageUsersModal');
}

function generatePassword() {
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789';
  let pass = '';
  for (let index = 0; index < 8; index += 1) {
    pass += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  document.getElementById('muPass').value = pass;
}

function showUserError(message) {
  const error = document.getElementById('userErr');
  error.textContent = message;
  error.style.display = 'block';
}

function hideUserError() {
  const error = document.getElementById('userErr');
  error.textContent = '';
  error.style.display = 'none';
}

async function saveEmployee() {
  const name = document.getElementById('muName').value.trim();
  const email = document.getElementById('muEmail').value.trim().toLowerCase();
  const role = document.getElementById('muRole').value;
  const pass = document.getElementById('muPass').value.trim();
  const editingEmail = document.getElementById('muEditEmail').value.trim().toLowerCase();

  if (!name || !email || !pass) {
    showUserError('Completa todos los campos.');
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showUserError('Ingresa un correo valido.');
    return;
  }
  if (pass.length < 6) {
    showUserError('La contrasena debe tener al menos 6 caracteres.');
    return;
  }
  if (email === state.owner.email.toLowerCase() && email !== editingEmail) {
    showUserError('Ese correo ya pertenece al propietario.');
    return;
  }
  const duplicate = state.employees.find((employee) => employee.email.toLowerCase() === email && employee.email.toLowerCase() !== editingEmail);
  if (duplicate) {
    showUserError('Ya existe un empleado con ese correo.');
    return;
  }

  try {
    if (editingEmail) {
      const index = state.employees.findIndex((employee) => employee.email.toLowerCase() === editingEmail);
      if (index === -1) return;
      const updatedEmployee = {
        ...state.employees[index],
        name,
        email,
        role,
        pass,
      };
      await fetch(`/api/users/${state.employees[index].id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedEmployee)
      });
      state.employees[index] = updatedEmployee;
      if (currentUser && currentUser.email.toLowerCase() === editingEmail) {
        currentUser = {
          ...currentUser,
          email,
          name,
          label: role,
        };
      }
      showToast('Empleado actualizado', 'success');
    } else {
      const newEmployee = {
        name,
        email,
        role,
        status: 'Activo',
        since: formatDateISO(new Date()),
        pass,
        isDefault: false,
      };
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEmployee)
      });
      const { id } = await res.json();
      newEmployee.id = id;
      state.employees.push(newEmployee);
      showToast('Empleado agregado', 'success');
    }
    closeModal('manageUsersModal');
    navigateTo('users');
  } catch (error) {
    console.error('Error saving employee:', error);
    showToast('Error al guardar empleado', 'error');
  }
}

function openDeleteConfirm(email, name) {
  pendingDeleteEmail = email;
  document.getElementById('deleteMsg').textContent = `Se eliminara la cuenta de ${name}.`;
  openModal('confirmDeleteModal');
}

async function confirmDelete() {
  if (!pendingDeleteEmail) return;
  const employee = state.employees.find((employee) => employee.email.toLowerCase() === pendingDeleteEmail.toLowerCase());
  if (!employee) return;
  try {
    await fetch(`/api/users/${employee.id}`, { method: 'DELETE' });
    state.employees = state.employees.filter(e => e.id !== employee.id);
    pendingDeleteEmail = null;
    closeModal('confirmDeleteModal');
    navigateTo('users');
    showToast(`Empleado eliminado: ${employee.name}`, 'success');
  } catch (error) {
    console.error('Error deleting employee:', error);
    showToast('Error al eliminar empleado', 'error');
  }
}

// ===================== DASHBOARD =====================
function buildDashboard() {
  if (currentUser.role !== 'owner') return restricted();
  const today = getSalesSummary('today');
  const week = getSalesSummary('week');
  const averageTicket = week.orders ? week.revenue / week.orders : 0;
  const history = getSalesHistory();
  const topProducts = getTopProducts(5);
  const maxRevenue = Math.max(1, ...history.map((entry) => entry.revenue));
  const categories = getCategorySalesBreakdown().slice(0, 3);
  const categoryColors = ['var(--accent)', 'var(--amber)', 'var(--rose)'];

  return `<div>
    <div class="stats-grid">
      <div class="stat-card"><div class="stat-label">Ventas hoy</div><div class="stat-value">$${fmt(today.revenue)}</div><div class="stat-sub">${today.orders} orden(es) pagada(s)</div></div>
      <div class="stat-card amber"><div class="stat-label">Ordenes activas</div><div class="stat-value">${state.commandas.length}</div><div class="stat-sub">${state.commandas.length ? 'Pendientes en cocina/caja' : 'Sin pendientes'}</div></div>
      <div class="stat-card rose"><div class="stat-label">Ticket promedio</div><div class="stat-value">$${fmt(averageTicket)}</div><div class="stat-sub">Ultimos 7 dias</div></div>
      <div class="stat-card sky"><div class="stat-label">Total semana</div><div class="stat-value">$${fmt(week.revenue)}</div><div class="stat-sub">${week.orders} venta(s) registradas</div></div>
    </div>
    <div class="charts-grid">
      <div class="chart-card">
        <div class="chart-title">Ventas por dia - semana actual</div>
        <div class="bar-chart">
          ${history.map((entry) => `<div class="bar-col">
            <div class="bar-val">$${Math.round(entry.revenue / 1000)}k</div>
            <div class="bar" style="height:${Math.max(8, Math.floor((entry.revenue / maxRevenue) * 110))}px"></div>
            <div class="bar-label">${esc(entry.day)}</div>
          </div>`).join('')}
        </div>
      </div>
      <div class="chart-card">
        <div class="chart-title">Ventas por categoria</div>
        ${categories.length ? categories.map((entry, index) => `
          <div class="legend-item"><div class="legend-dot" style="background:${categoryColors[index] || 'var(--accent)'}"></div>${esc(entry.category)} ${entry.pct}%</div>
        `).join('') : '<div style="font-size:12px;color:var(--stone)">Sin ventas registradas</div>'}
      </div>
    </div>
    <div style="margin-top:16px">
      <div class="section-title">Productos mas vendidos</div>
      <table class="data-table">
        <thead><tr><th>Producto</th><th>Unidades</th><th>Ingresos MXN</th></tr></thead>
        <tbody>${(topProducts.length ? topProducts : [{ name: 'Sin ventas', cat: 'Platos Fuertes', qty: 0, revenue: 0 }]).map((product) => `
          <tr><td><div style="display:flex;align-items:center;gap:8px"><div style="width:28px;height:28px;background:var(--accent-mist);border-radius:6px;display:flex;align-items:center;justify-content:center;color:var(--accent-dark)">${CAT_ICONS[product.cat] || DEFAULT_ICON}</div>${esc(product.name)}</div></td>
          <td style="font-family:var(--mono)">${product.qty}</td>
          <td style="font-family:var(--mono);color:var(--accent-dark);font-weight:700">$${fmt(product.revenue)}</td></tr>
        `).join('')}
        </tbody>
      </table>
    </div>
  </div>`;
}

// ===================== FINANCES =====================
function buildFinances() {
  if (currentUser.role !== 'owner') return restricted();
  const summary = getSalesSummary('week');
  const revenue = summary.revenue;
  const cost = summary.cost;
  const grossProfit = toMoney(revenue - cost);
  const profit = summary.profit;
  const labor = toMoney(revenue * 0.18);
  const rent = toMoney(revenue * 0.1);
  const services = toMoney(revenue * 0.06);
  const other = toMoney(revenue * 0.04);
  const weekHistory = getSalesHistory();

  return `<div>
    <div class="stats-grid">
      <div class="stat-card"><div class="stat-label">Ingresos brutos</div><div class="stat-value">$${fmt(revenue)}</div><div class="stat-sub">Ultimos 7 dias</div></div>
      <div class="stat-card amber"><div class="stat-label">Costo materia prima</div><div class="stat-value">$${fmt(cost)}</div><div class="stat-sub">Costo real de ventas</div></div>
      <div class="stat-card sky"><div class="stat-label">Utilidad bruta</div><div class="stat-value">$${fmt(grossProfit)}</div><div class="stat-sub">Ventas menos costo de producto</div></div>
      <div class="stat-card rose"><div class="stat-label">Ganancia neta</div><div class="stat-value">$${fmt(profit)}</div><div class="stat-sub">${revenue ? `${Math.round((profit / revenue) * 100)}% margen` : 'Sin margen aun'}</div></div>
    </div>
    <div class="charts-grid">
      <div class="chart-card">
        <div class="chart-title">Flujo de caja semanal</div>
        <table class="data-table">
          <thead><tr><th>Dia</th><th>Ingresos MXN</th><th>Costos MXN</th><th>Ordenes</th></tr></thead>
          <tbody>${weekHistory.map((entry) => `<tr>
            <td><strong>${esc(entry.day)}</strong></td>
            <td style="font-family:var(--mono);color:var(--accent-dark)">$${fmt(entry.revenue)}</td>
            <td style="font-family:var(--mono);color:var(--rose)">$${fmt(entry.revenue * 0.4)}</td>
            <td style="font-family:var(--mono);font-weight:700">${entry.orders}</td>
          </tr>`).join('')}</tbody>
        </table>
      </div>
      <div class="chart-card">
        <div class="chart-title">Desglose estimado de gastos</div>
        ${[
          ['Materia Prima', cost, revenue ? Math.round((cost / revenue) * 100) : 0, 'var(--amber)'],
          ['Personal', labor, revenue ? Math.round((labor / revenue) * 100) : 0, 'var(--sky)'],
          ['Renta', rent, revenue ? Math.round((rent / revenue) * 100) : 0, 'var(--rose)'],
          ['Servicios', services, revenue ? Math.round((services / revenue) * 100) : 0, 'var(--stone-light)'],
          ['Otros', other, revenue ? Math.round((other / revenue) * 100) : 0, 'var(--accent-pale)'],
        ].map(([label, amount, pct, color]) => `
          <div style="margin-bottom:10px">
            <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:3px"><span>${label}</span><span style="font-weight:700">$${fmt(amount)} · ${pct}%</span></div>
            <div class="inv-bar"><div style="height:100%;background:${color};border-radius:3px;width:${pct}%"></div></div>
          </div>
        `).join('')}
      </div>
    </div>
    <div class="chart-card" style="margin-top:14px">
      <div class="chart-title">Variantes mas vendidas</div>
      ${(() => {
        const tv = getTopVariants(10);
        if (!tv.length) return `<div style="padding:18px;text-align:center;color:var(--stone);font-size:13px">Aun no hay ventas con variantes registradas</div>`;
        const max = tv[0].qty || 1;
        return tv.map((v, i) => `
          <div style="margin-bottom:10px">
            <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:3px">
              <span><span style="font-family:var(--mono);color:var(--stone)">${i + 1}.</span> ${esc(v.label)}</span>
              <span style="font-weight:700;white-space:nowrap">${v.qty} vendida${v.qty === 1 ? '' : 's'}</span>
            </div>
            <div class="inv-bar"><div style="height:100%;background:var(--accent);border-radius:3px;width:${Math.round((v.qty / max) * 100)}%"></div></div>
          </div>
        `).join('');
      })()}
    </div>
  </div>`;
}

// ===================== SALES =====================
function buildSales() {
  if (currentUser.role !== 'owner') return restricted();
  if (!salesSelectedDate) salesSelectedDate = toLocalDateStr(new Date());
  const todayStr = toLocalDateStr(new Date());
  const yesterdayStr = toLocalDateStr(new Date(Date.now() - 86400000));
  return `<div style="display:grid;grid-template-columns:340px 1fr;gap:14px;height:calc(100vh - 128px)">

    <!-- Panel izquierdo -->
    <div style="display:flex;flex-direction:column;background:var(--surface);border-radius:var(--r-lg);box-shadow:var(--shadow-md);overflow:hidden">

      <!-- Encabezado -->
      <div style="padding:14px 14px 10px;border-bottom:1px solid var(--stone-pale)">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
          <span style="font-size:14px;font-weight:700;color:var(--charcoal)">Historial de Ventas</span>
          <button class="btn btn-primary btn-sm" onclick="exportSales()">
            <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
            Exportar
          </button>
        </div>
        <div style="display:flex;gap:5px;margin-bottom:8px">
          <button class="btn btn-sm ${salesSelectedDate === todayStr ? 'btn-primary' : 'btn-secondary'}" onclick="setSalesDate('${todayStr}')">Hoy</button>
          <button class="btn btn-sm ${salesSelectedDate === yesterdayStr ? 'btn-primary' : 'btn-secondary'}" onclick="setSalesDate('${yesterdayStr}')">Ayer</button>
          <input type="date" style="flex:1;border:1px solid var(--stone-pale);border-radius:var(--r);padding:4px 8px;font-size:12px;background:var(--surface);color:var(--charcoal)" value="${salesSelectedDate}" onchange="setSalesDate(this.value)">
        </div>
        <div class="search-bar" style="margin:0">
          <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><path stroke-linecap="round" d="M21 21l-4.35-4.35"/></svg>
          <input type="text" placeholder="Buscar por folio o mesero..." value="${esc(salesSearchTerm)}" oninput="setSalesSearch(this.value)">
        </div>
      </div>

      <!-- Pestañas -->
      <div style="display:flex;border-bottom:1px solid var(--stone-pale)">
        <button onclick="setSalesTab('sales')" style="flex:1;padding:7px;font-size:12px;font-weight:600;border:none;cursor:pointer;background:${salesTab==='sales'?'var(--accent-mist)':'transparent'};color:${salesTab==='sales'?'var(--accent-dark)':'var(--stone)'}">
          Ventas
        </button>
        <button onclick="setSalesTab('movements')" style="flex:1;padding:7px;font-size:12px;font-weight:600;border:none;cursor:pointer;background:${salesTab==='movements'?'var(--accent-mist)':'transparent'};color:${salesTab==='movements'?'var(--accent-dark)':'var(--stone)'}">
          Movimientos
        </button>
      </div>

      <!-- Lista -->
      <div id="salesListPanel" style="flex:1;overflow-y:auto">${renderSalesListHTML()}</div>

      <!-- Resumen del día -->
      <div id="salesDaySummary" style="padding:10px 14px;border-top:1px solid var(--stone-pale);background:var(--surface-alt)">
        ${renderSalesDaySummaryHTML()}
      </div>
    </div>

    <!-- Panel derecho: detalle -->
    <div id="saleDetailPanel" style="background:var(--surface);border-radius:var(--r-lg);box-shadow:var(--shadow-md);overflow-y:auto">
      ${salesTab === 'movements' ? renderMovementDetailHTML() : renderSaleDetailHTML()}
    </div>
  </div>`;
}

function getMovementTicketNumber(m) {
  try { return m.data ? (JSON.parse(m.data).ticketNumber ?? null) : null; } catch { return null; }
}

function renderSalesListHTML() {
  if (salesTab === 'movements') {
    const movs = salesMovements.filter(m => toLocalDateStr(m.timestamp) === salesSelectedDate);
    if (!movs.length) return `<div style="text-align:center;padding:40px 20px;color:var(--stone);font-size:13px">Sin actividad registrada este día</div>`;

    // Group by ticketNumber
    const ticketMap = new Map();
    movs.forEach(m => {
      const tn = getMovementTicketNumber(m);
      if (tn == null) return;
      if (!ticketMap.has(tn)) ticketMap.set(tn, []);
      ticketMap.get(tn).push(m);
    });
    if (!ticketMap.size) return `<div style="text-align:center;padding:40px 20px;color:var(--stone);font-size:13px">Sin actividad registrada este día</div>`;

    return [...ticketMap.entries()]
      .sort((a, b) => {
        const tA = Math.max(...a[1].map(m => new Date(m.timestamp)));
        const tB = Math.max(...b[1].map(m => new Date(m.timestamp)));
        return tB - tA;
      })
      .map(([tn, mList]) => {
        const sel = movementsSelectedTicket === tn;
        const cancelled = mList.some(m => m.type === 'cancel_order');
        const completed = mList.some(m => m.type === 'create_order') && !cancelled;
        const sale = state.salesRecords.find(s => s.ticketNumber === tn);
        const mesa = (() => { try { return JSON.parse(mList.find(m => m.data)?.data || '{}').mesa || '—'; } catch { return '—'; } })();
        const waiter = mList[0]?.user || '—';
        const lastTime = formatTime(mList.reduce((a, b) => new Date(a.timestamp) > new Date(b.timestamp) ? a : b).timestamp);
        const statusChip = cancelled
          ? `<span style="font-size:9.5px;font-weight:700;background:#e53935;color:#fff;padding:1px 6px;border-radius:4px">CANCELADA</span>`
          : sale ? `<span style="font-size:9.5px;font-weight:700;background:#16a34a;color:#fff;padding:1px 6px;border-radius:4px">COMPLETADA</span>`
          : `<span style="font-size:9.5px;font-weight:700;background:var(--accent);color:#fff;padding:1px 6px;border-radius:4px">ACTIVA</span>`;
        return `<div onclick="selectMovementTicket(${tn})"
          style="padding:10px 14px;border-bottom:1px solid var(--stone-pale);cursor:pointer;transition:background .1s;background:${sel?'var(--accent-mist)':'transparent'};border-left:3px solid ${sel?'var(--accent)':'transparent'}">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:3px">
            <div style="display:flex;align-items:center;gap:6px">
              <span style="font-family:var(--mono);font-weight:800;font-size:13px;color:var(--accent-dark)">#${tn}</span>
              ${statusChip}
            </div>
            <span style="font-size:11px;color:var(--stone);font-family:var(--mono)">${lastTime}</span>
          </div>
          <div style="font-size:11.5px;color:var(--charcoal)">${esc(mesa)} · ${esc(waiter)}</div>
          <div style="font-size:11px;color:var(--stone);margin-top:1px">${mList.length} evento(s)</div>
        </div>`;
      }).join('');
  }

  const all = getSalesByDate(salesSelectedDate);
  const term = salesSearchTerm.toLowerCase();
  const filtered = term
    ? all.filter(s => String(s.ticketNumber).includes(term) || (s.waiter||'').toLowerCase().includes(term))
    : all;

  if (!filtered.length) {
    return `<div style="text-align:center;padding:40px 20px;color:var(--stone);font-size:13px">${term ? 'Sin resultados para la búsqueda' : 'Sin ventas registradas este día'}</div>`;
  }
  return filtered.map(s => {
    const sItems = Array.isArray(s.items) ? s.items : (typeof s.items === 'string' ? (() => { try { return JSON.parse(s.items); } catch { return []; } })() : []);
    const arts = sItems.reduce((sum, i) => sum + i.qty, 0);
    const sKey = s.id != null ? s.id : `tn-${s.ticketNumber}`;
    const sel = salesSelectedId != null && String(salesSelectedId) === String(sKey);
    const cancelled = s.status === 'Cancelado';
    const bgSel = cancelled ? '#fde8e8' : 'var(--accent-mist)';
    const bgNorm = cancelled ? '#fff5f5' : 'transparent';
    const borderSel = cancelled ? '#e53935' : 'var(--accent)';
    const borderNorm = cancelled ? '#ffcdd2' : 'transparent';
    return `<div onclick="selectSaleTicket('${sKey}')"
      style="border-bottom:1px solid var(--stone-pale);cursor:pointer;transition:background 0.1s;background:${sel?bgSel:bgNorm};border-left:3px solid ${sel?borderSel:borderNorm}">
      ${cancelled ? `<div style="background:#e53935;color:#fff;text-align:center;font-size:11px;font-weight:800;letter-spacing:2px;padding:3px 0">✕ CANCELADA</div>` : ''}
      <div style="display:grid;grid-template-columns:38px 1fr auto 68px;align-items:center;gap:6px;padding:9px 14px">
        <span style="font-family:var(--mono);font-weight:700;font-size:11.5px;color:${cancelled?'#e53935':'var(--accent-dark)'}">#${s.ticketNumber}</span>
        <div>
          <div style="font-size:12.5px;font-weight:600;color:${cancelled?'#c62828':'var(--charcoal)'}${cancelled?';text-decoration:line-through':''}">${formatTime(s.completedAt)}</div>
          <div style="font-size:11px;color:var(--stone)">${esc(s.waiter)} · ${s.type==='llevar'?'Llevar':esc(s.mesa)}</div>
        </div>
        <div style="text-align:center;font-size:11px;color:var(--stone)">${arts}<br><span style="font-size:10px">art.</span></div>
        <div style="text-align:right;font-family:var(--mono);font-weight:700;font-size:13px;color:${cancelled?'#e53935':'var(--charcoal)'}">$${fmt(s.total)}</div>
      </div>
    </div>`;
  }).join('');
}

function renderSalesDaySummaryHTML() {
  const sales = getSalesByDate(salesSelectedDate);
  const paid = sales.filter(s => s.status !== 'Cancelado');
  const cancelled = sales.filter(s => s.status === 'Cancelado');
  const total = paid.reduce((sum, s) => sum + s.total, 0);
  const arts = paid.reduce((sum, s) => {
    const si = Array.isArray(s.items) ? s.items : (typeof s.items === 'string' ? (() => { try { return JSON.parse(s.items); } catch { return []; } })() : []);
    return sum + si.reduce((a, i) => a + i.qty, 0);
  }, 0);
  return `<div style="display:flex;justify-content:space-between;align-items:center;font-size:12px;flex-wrap:wrap;gap:4px">
    <span style="color:var(--stone)">${paid.length} venta(s) · ${arts} artículos${cancelled.length ? ` · <span style="color:#e53935">${cancelled.length} cancelada(s)</span>` : ''}</span>
    <span style="font-weight:700;color:var(--accent-dark);font-family:var(--mono)">$${fmt(total)} MXN</span>
  </div>`;
}

function renderSaleDetailHTML() {
  if (!salesSelectedId) return `
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:12px;color:var(--stone)">
      <svg width="52" height="52" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
      <span style="font-size:13px">Selecciona un ticket para ver el detalle</span>
    </div>`;
  const sale = state.salesRecords.find(s => {
    const sKey = s.id != null ? s.id : `tn-${s.ticketNumber}`;
    return String(sKey) === String(salesSelectedId);
  });
  if (!sale) return '';
  const saleItems = Array.isArray(sale.items) ? sale.items : (typeof sale.items === 'string' ? (() => { try { return JSON.parse(sale.items); } catch { return []; } })() : []);
  const salePayments = Array.isArray(sale.payments) ? sale.payments : (typeof sale.payments === 'string' ? (() => { try { return JSON.parse(sale.payments); } catch { return []; } })() : []);
  const dateStr = new Date(sale.completedAt).toLocaleDateString('es-MX', { day:'2-digit', month:'long', year:'numeric' });
  const cancelled = sale.status === 'Cancelado';
  return `<div style="padding:20px;position:relative;overflow:hidden">
    ${cancelled ? `
    <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;pointer-events:none;z-index:1">
      <div style="transform:rotate(-35deg);font-size:72px;font-weight:900;color:rgba(229,57,53,0.13);letter-spacing:4px;white-space:nowrap;user-select:none">CANCELADO</div>
    </div>
    <div style="position:relative;z-index:2;background:#e53935;color:#fff;border-radius:var(--r);padding:11px 16px;margin-bottom:16px;display:flex;align-items:center;gap:10px">
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#fff" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/></svg>
      <div>
        <div style="font-size:14px;font-weight:800;letter-spacing:.5px">VENTA CANCELADA</div>
        <div style="font-size:11px;opacity:.85;margin-top:1px">Los productos fueron devueltos al inventario</div>
      </div>
    </div>` : ''}
    <div style="position:relative;z-index:2">
    <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:18px">
      <div>
        <div style="font-size:20px;font-weight:800;color:${cancelled?'#e53935':'var(--charcoal)'}">Ticket #${sale.ticketNumber}</div>
        <div style="font-size:12.5px;color:var(--stone);margin-top:3px">${dateStr} · ${formatTime(sale.completedAt)}</div>
      </div>
      <span class="badge ${sale.type==='llevar'?'badge-amber':'badge-green'}">${sale.type==='llevar'?'Para llevar':esc(sale.mesa)}</span>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:18px">
      <div style="background:var(--accent-mist);border-radius:var(--r);padding:10px 12px">
        <div style="font-size:10px;color:var(--stone);text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px">Mesero</div>
        <div style="font-size:13px;font-weight:600;color:var(--charcoal)">${esc(sale.waiter)}</div>
      </div>
      <div style="background:var(--accent-mist);border-radius:var(--r);padding:10px 12px">
        <div style="font-size:10px;color:var(--stone);text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px">Comensales</div>
        <div style="font-size:13px;font-weight:600;color:var(--charcoal)">${sale.comensales||'—'}</div>
      </div>
      <div style="background:var(--accent-mist);border-radius:var(--r);padding:10px 12px">
        <div style="font-size:10px;color:var(--stone);text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px">Pago</div>
        <div style="font-size:13px;font-weight:600;color:var(--charcoal)">${esc(sale.paymentMethod||'Efectivo')}</div>
      </div>
    </div>

    <table class="data-table" style="margin-bottom:16px">
      <thead><tr><th style="width:40px">Cant.</th><th>Descripción</th><th style="text-align:right">Importe</th></tr></thead>
      <tbody>${saleItems.map(item => `
        <tr>
          <td style="font-family:var(--mono);font-weight:700;color:var(--accent-dark)">${item.qty}</td>
          <td>
            <span style="font-weight:500">${esc(item.name)}</span>
            ${item.variantLabel?`<div style="font-size:11px;color:var(--stone)">${esc(item.variantLabel)}</div>`:''}
            ${item.isCombo&&item.comboItems?.length?`<div style="font-size:11px;color:var(--stone);line-height:1.7">${item.comboItems.map(ci=>`• ${ci.qty}x ${esc(ci.name||'')}${ci.variantLabel?` (${esc(ci.variantLabel)})`:''}`).join('<br>')}</div>`:''}
            ${item.notes?`<div style="font-size:11px;color:var(--accent-dark)">Nota: ${esc(item.notes)}</div>`:''}
          </td>
          <td style="font-family:var(--mono);font-weight:600;text-align:right;color:var(--charcoal)">$${fmt(item.price*item.qty)}</td>
        </tr>`).join('')}
      </tbody>
    </table>

    ${sale.notes?`<div style="background:var(--accent-mist);border-radius:var(--r);padding:9px 12px;font-size:12.5px;margin-bottom:14px;color:var(--accent-dark)"><strong>Notas:</strong> ${esc(sale.notes)}</div>`:''}

    <div style="border-top:2px solid ${cancelled?'#ffcdd2':'var(--stone-pale)'};padding-top:14px;display:flex;justify-content:space-between;align-items:center">
      <div>
        <div style="font-size:22px;font-weight:800;color:${cancelled?'#e53935':'var(--charcoal)'}">$${fmt(sale.total)} MXN</div>
        <div style="font-size:11.5px;color:var(--stone);margin-top:2px">${saleItems.reduce((s,i)=>s+i.qty,0)} artículo(s)${cancelled?' · Cancelada':''}</div>
      </div>
      ${!cancelled ? `<button class="btn btn-danger btn-sm" onclick="deleteSale(${sale.id})">
        <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
        Eliminar venta
      </button>` : ''}
    </div>

    ${!cancelled && (salePayments.length || sale.change > 0) ? `
    <div style="margin-top:14px;background:var(--surface-alt);border-radius:var(--r);padding:11px 14px;font-size:12.5px">
      <div style="font-size:10px;color:var(--stone);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">Detalle de pago</div>
      ${salePayments.length
        ? salePayments.map(p => `<div style="display:flex;justify-content:space-between;margin-bottom:3px"><span>${esc(p.method)}</span><span style="font-family:var(--mono)">$${fmt(p.amount)}</span></div>`).join('')
        : `<div style="display:flex;justify-content:space-between;margin-bottom:3px"><span>${esc(sale.paymentMethod||'Efectivo')}</span><span style="font-family:var(--mono)">$${fmt(sale.total)}</span></div>`}
      ${sale.amountReceived ? `<div style="display:flex;justify-content:space-between;margin-bottom:3px;color:var(--stone)"><span>Recibido (efectivo)</span><span style="font-family:var(--mono)">$${fmt(sale.amountReceived)}</span></div>` : ''}
      ${sale.change > 0 ? `<div style="display:flex;justify-content:space-between;font-weight:800;color:var(--accent-dark);border-top:1px dashed var(--stone-pale);padding-top:5px;margin-top:4px"><span>Cambio</span><span style="font-family:var(--mono)">$${fmt(sale.change)}</span></div>` : ''}
    </div>` : ''}
  </div></div>`;
}

function setSalesDate(dateStr) {
  if (!dateStr) return;
  salesSelectedDate = dateStr;
  salesSelectedId = null;
  document.querySelector('[type="date"]') && (document.querySelector('[type="date"]').value = dateStr);
  const listEl = document.getElementById('salesListPanel');
  if (listEl) listEl.innerHTML = renderSalesListHTML();
  const sumEl = document.getElementById('salesDaySummary');
  if (sumEl) sumEl.innerHTML = renderSalesDaySummaryHTML();
  const detEl = document.getElementById('saleDetailPanel');
  if (detEl) detEl.innerHTML = renderSaleDetailHTML();
}

function setSalesSearch(term) {
  salesSearchTerm = term;
  const listEl = document.getElementById('salesListPanel');
  if (listEl) listEl.innerHTML = renderSalesListHTML();
}

function selectSaleTicket(key) {
  salesSelectedId = key;
  const listEl = document.getElementById('salesListPanel');
  if (listEl) listEl.innerHTML = renderSalesListHTML();
  const detEl = document.getElementById('saleDetailPanel');
  if (detEl) detEl.innerHTML = renderSaleDetailHTML();
}

function setSalesTab(tab) {
  salesTab = tab;
  salesSelectedId = null;
  movementsSelectedTicket = null;
  navigateTo('sales');
}

function selectMovementTicket(tn) {
  movementsSelectedTicket = tn;
  const listEl = document.getElementById('salesListPanel');
  if (listEl) listEl.innerHTML = renderSalesListHTML();
  const detEl = document.getElementById('saleDetailPanel');
  if (detEl) detEl.innerHTML = renderMovementDetailHTML();
}

function renderMovementDetailHTML() {
  if (movementsSelectedTicket == null) return `
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:12px;color:var(--stone)">
      <svg width="52" height="52" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
      <span style="font-size:13px">Selecciona una comanda para ver su historial</span>
    </div>`;

  const tn = movementsSelectedTicket;
  const movs = salesMovements.filter(m => getMovementTicketNumber(m) === tn)
    .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

  // Get comanda product list from the most detailed movement (create_order or cancel_order)
  let comandaItems = [];
  let comandaMeta = { mesa: '—', type: '—', waiter: '—' };
  const createMov = movs.find(m => m.type === 'create_order');
  const cancelMov = movs.find(m => m.type === 'cancel_order');
  const refMov = cancelMov || createMov;
  if (refMov?.data) {
    try {
      const d = JSON.parse(refMov.data);
      comandaItems = Array.isArray(d.items) ? d.items : [];
      comandaMeta = { mesa: d.mesa || '—', type: d.type || '—', waiter: refMov.user };
    } catch {}
  }
  // Also check latest edit for final state
  const edits = movs.filter(m => m.type === 'edit_order');
  if (edits.length) {
    try {
      const lastEdit = edits[edits.length - 1];
      const d = JSON.parse(lastEdit.data);
      if (Array.isArray(d.newItems)) comandaItems = d.newItems;
    } catch {}
  }

  const isCancelled = !!cancelMov;
  const sale = state.salesRecords.find(s => s.ticketNumber === tn);
  const statusLabel = isCancelled ? 'CANCELADA' : (sale ? 'COMPLETADA' : 'ACTIVA');
  const statusColor = isCancelled ? '#e53935' : (sale ? '#16a34a' : 'var(--accent)');

  const typeLabel = { cancel_order: 'Cancelación', delete_sale: 'Eliminación', create_order: 'Apertura de comanda', edit_order: 'Edición guardada', comanda_action: 'Cambio en producto', adjust_stock: 'Ajuste de stock' };
  const typeColor = { cancel_order: '#e53935', delete_sale: '#e53935', create_order: '#16a34a', edit_order: '#f59e0b', comanda_action: '#7c3aed' };
  const typeIcon = {
    create_order: '<svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>',
    cancel_order: '<svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>',
    edit_order: '<svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>',
    comanda_action: '<svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/></svg>',
  };

  const eventsHTML = movs.map((m, i) => {
    const color = typeColor[m.type] || 'var(--stone)';
    const icon = typeIcon[m.type] || '';
    let detailHTML = '';
    if (m.data) {
      try {
        const d = JSON.parse(m.data);
        if (m.type === 'edit_order' && d.previousItems && d.newItems) {
          const added = d.newItems.filter(n => !d.previousItems.find(p => p.id === n.id));
          const removed = d.previousItems.filter(p => !d.newItems.find(n => n.id === p.id));
          const changed = d.newItems.filter(n => { const p = d.previousItems.find(pr => pr.id === n.id); return p && p.qty !== n.qty; });
          const rows = [
            ...added.map(i => `<div style="color:#16a34a">+ ${i.qty}x ${esc(i.name)}</div>`),
            ...removed.map(i => `<div style="color:#e53935">− ${i.qty}x ${esc(i.name)}</div>`),
            ...changed.map(i => { const p = d.previousItems.find(pr => pr.id === i.id); return `<div style="color:#f59e0b">~ ${esc(i.name)}: ${p.qty}→${i.qty}</div>`; }),
          ];
          if (rows.length) detailHTML = `<div style="font-size:11.5px;margin-top:4px;padding:5px 8px;background:var(--surface-alt);border-radius:5px;line-height:1.8">${rows.join('')}</div>`;
        } else if (m.type === 'create_order' && Array.isArray(d.items)) {
          detailHTML = `<div style="font-size:11.5px;color:var(--stone);margin-top:3px">${d.items.map(i => `${i.qty}x ${esc(i.name)}`).join(' · ')}</div>`;
        }
      } catch {}
    }
    const isLast = i === movs.length - 1;
    return `<div style="display:flex;gap:10px;padding-bottom:${isLast?'0':'16px'}">
      <div style="display:flex;flex-direction:column;align-items:center;gap:0">
        <div style="width:28px;height:28px;border-radius:50%;background:${color};color:#fff;display:flex;align-items:center;justify-content:center;flex-shrink:0">${icon}</div>
        ${!isLast ? `<div style="width:2px;flex:1;background:var(--stone-pale);margin:3px 0"></div>` : ''}
      </div>
      <div style="flex:1;padding-top:4px">
        <div style="display:flex;justify-content:space-between;align-items:flex-start">
          <span style="font-size:12.5px;font-weight:700;color:${color}">${esc(typeLabel[m.type] || m.type)}</span>
          <span style="font-size:11px;color:var(--stone);font-family:var(--mono)">${formatTime(m.timestamp)}</span>
        </div>
        <div style="font-size:12px;color:var(--charcoal);margin-top:1px">${esc(m.description)}</div>
        ${detailHTML}
        <div style="font-size:11px;color:var(--stone-light);margin-top:3px">${esc(m.user)}</div>
      </div>
    </div>`;
  }).join('');

  return `<div style="padding:20px">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
      <div>
        <div style="font-size:20px;font-weight:800;color:var(--charcoal)">Comanda #${tn}</div>
        <div style="font-size:12.5px;color:var(--stone);margin-top:2px">${esc(comandaMeta.mesa)} · ${esc(comandaMeta.waiter)}</div>
      </div>
      <span style="font-size:11px;font-weight:700;background:${statusColor};color:#fff;padding:4px 10px;border-radius:var(--r)">${statusLabel}</span>
    </div>

    ${comandaItems.length ? `
    <div style="background:var(--accent-mist);border-radius:var(--r);padding:12px 14px;margin-bottom:18px">
      <div style="font-size:10.5px;font-weight:700;color:var(--accent-dark);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Productos en la comanda</div>
      ${comandaItems.map(i => `
        <div style="display:flex;justify-content:space-between;align-items:center;padding:4px 0;border-bottom:1px solid rgba(0,0,0,.05)">
          <div>
            <span style="font-size:13px;font-weight:600;color:var(--charcoal)">${esc(i.name)}</span>
            ${i.variantLabel ? `<span style="font-size:11px;color:var(--stone)"> · ${esc(i.variantLabel)}</span>` : ''}
          </div>
          <div style="display:flex;align-items:center;gap:8px">
            <span style="font-size:12px;color:var(--stone)">${i.qty}x</span>
            <span style="font-family:var(--mono);font-size:12.5px;font-weight:600;color:var(--charcoal)">$${fmt(i.price * i.qty)}</span>
          </div>
        </div>`).join('')}
    </div>` : ''}

    <div style="font-size:11px;font-weight:700;color:var(--stone);text-transform:uppercase;letter-spacing:.5px;margin-bottom:12px">Historial de eventos</div>
    <div>${eventsHTML}</div>
  </div>`;
}

async function loadSalesMovements() {
  try {
    const res = await fetch('/api/movements');
    salesMovements = await res.json();
    if (salesTab === 'movements') {
      const listEl = document.getElementById('salesListPanel');
      if (listEl) listEl.innerHTML = renderSalesListHTML();
      const detEl = document.getElementById('saleDetailPanel');
      if (detEl) detEl.innerHTML = renderMovementDetailHTML();
    }
  } catch (e) {
    salesMovements = [];
  }
}

function exportSales() {
  if (!salesSelectedDate) salesSelectedDate = toLocalDateStr(new Date());
  const sales = getSalesByDate(salesSelectedDate);
  if (!sales.length) { showToast('No hay ventas para exportar', 'error'); return; }
  const rows = [
    ['Ticket','Fecha','Hora','Tipo','Mesa','Comensales','Mesero','Metodo','Articulos','Total'],
    ...sales.map(s => [
      s.ticketNumber,
      salesSelectedDate,
      formatTime(s.completedAt),
      s.type,
      s.mesa,
      s.comensales,
      s.waiter,
      s.paymentMethod||'Efectivo',
      s.items.reduce((sum,i)=>sum+i.qty,0),
      s.total,
    ]),
  ];
  const csv = rows.map(r => r.map(c => `"${String(c||'').replace(/"/g,'""')}"`).join(',')).join('\n');
  downloadTextFile(`ventas-${salesSelectedDate}.csv`, csv, 'text/csv;charset=utf-8');
  showToast('Reporte exportado', 'success');
}

async function deleteSale(id) {
  if (!confirm('¿Estás seguro de que quieres eliminar esta venta? Esta acción no se puede deshacer.')) return;
  try {
    await fetch(`/api/sales/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user: currentUser.name })
    });
    const index = state.salesRecords.findIndex(s => s.id === id);
    if (index !== -1) state.salesRecords.splice(index, 1);
    if (salesSelectedId === id) salesSelectedId = null;
    const listEl = document.getElementById('salesListPanel');
    if (listEl) listEl.innerHTML = renderSalesListHTML();
    const sumEl = document.getElementById('salesDaySummary');
    if (sumEl) sumEl.innerHTML = renderSalesDaySummaryHTML();
    const detEl = document.getElementById('saleDetailPanel');
    if (detEl) detEl.innerHTML = renderSaleDetailHTML();
    showToast('Venta eliminada', 'success');
  } catch (error) {
    console.error('Error deleting sale:', error);
    showToast('Error al eliminar venta', 'error');
  }
}

// ===================== SETTINGS =====================
function buildSettings() {
  const isOwner = currentUser.role === 'owner';
  const ownerSettings = isOwner ? `
    <div class="chart-card" style="padding:18px;margin-bottom:13px">
      <div class="chart-title">Personalizacion de tienda</div>
      <div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
        <div style="width:68px;height:68px;border-radius:12px;background:var(--accent-mist);display:flex;align-items:center;justify-content:center;overflow:hidden;flex-shrink:0">${state.settings.logoDataUrl ? `<img src="${state.settings.logoDataUrl}" alt="Logo" style="width:100%;height:100%;object-fit:cover">` : renderBrandMarkMarkup(32)}</div>
        <div style="flex:1">
          <div class="form-group" style="margin-bottom:8px">
            <label class="form-label">Logo de la tienda</label>
            <input class="form-input" type="file" id="setting-logo-file" accept="image/*" onchange="handleLogoUpload(event)">
          </div>
          ${state.settings.logoDataUrl ? `<button class="btn btn-secondary btn-sm" onclick="removeStoreLogo()">Quitar logo</button>` : ''}
        </div>
      </div>
      <div class="form-group"><label class="form-label">Nombre</label><input class="form-input" id="setting-nombre" value="${esc(state.settings.restaurantName)}"></div>
      <div class="form-group"><label class="form-label">RFC</label><input class="form-input" id="setting-rfc" value="${esc(state.settings.rfc)}"></div>
      <div style="display:flex;justify-content:flex-end;margin-top:4px">
        <button class="btn btn-primary btn-sm" onclick="saveSettings('restaurant')">Guardar</button>
      </div>
    </div>
    <div class="chart-card" style="padding:18px;margin-bottom:13px">
      <div class="chart-title">Modificar ticket</div>
      <div class="form-group"><label class="form-label">Nombre del restaurante</label><input class="form-input" id="setting-ticket-name" value="${esc(state.settings.restaurantName)}"></div>
      <div class="form-group"><label class="form-label">Direccion</label><input class="form-input" id="setting-direccion" value="${esc(state.settings.address)}"></div>
      <div class="form-group"><label class="form-label">Telefono</label><input class="form-input" id="setting-phone" value="${esc(state.settings.phone || '')}" placeholder="Ej. 614 123 4567"></div>
      <div class="form-group"><label class="form-label">Pie de pagina</label><input class="form-input" id="setting-ticket-footer" value="${esc(state.settings.ticketFooter)}"></div>
      <div style="font-size:12px;color:var(--stone);margin-bottom:10px">El ticket usara automaticamente el logo actual de la tienda si ya fue cargado.</div>
      <div style="display:flex;justify-content:flex-end;margin-top:4px">
        <button class="btn btn-primary btn-sm" onclick="saveSettings('ticket')">Guardar</button>
      </div>
    </div>
    <div class="chart-card" style="padding:18px;margin-bottom:13px">
      <div class="chart-title">Impresion y operacion</div>
      <div class="form-group"><label class="form-label">Moneda</label><input class="form-input" id="setting-currency" value="${esc(state.settings.currency)}"></div>
      <div style="display:flex;justify-content:flex-end;margin-top:4px">
        <button class="btn btn-primary btn-sm" onclick="saveSettings('printing')">Guardar</button>
      </div>
    </div>
    <div class="chart-card" style="padding:18px;margin-bottom:13px">
      <div class="chart-title">Impresoras de Red</div>
      <div class="form-group"><label class="form-label">Cocina (IP:Puerto)</label><input class="form-input" id="setting-kitchen-printer" value="${esc(state.settings.kitchenPrinter)}"></div>
      <div class="form-group"><label class="form-label">Caja (IP:Puerto)</label><input class="form-input" id="setting-cash-printer" value="${esc(state.settings.cashPrinter)}"></div>
      <div style="display:flex;justify-content:flex-end;margin-top:4px">
        <button class="btn btn-primary btn-sm" onclick="saveSettings('printers')">Guardar</button>
      </div>
    </div>
    <div class="chart-card" style="padding:18px;margin-bottom:13px">
      <div class="chart-title">Respaldos</div>
      <p style="font-size:13px;color:var(--stone);margin-bottom:10px">El sistema crea un respaldo automatico cada hora y al arrancar. Manten las ultimas 30 copias.</p>
      <div style="display:flex;gap:8px;margin-bottom:12px">
        <button class="btn btn-primary btn-sm" onclick="createBackupNow()">Crear respaldo ahora</button>
        <button class="btn btn-secondary btn-sm" onclick="loadBackups()">Actualizar lista</button>
      </div>
      <div id="backup-list" style="max-height:280px;overflow-y:auto;border:1px solid var(--accent-mist);border-radius:8px;padding:6px"></div>
    </div>
  ` : '';

  const passwordSection = `
    <div class="chart-card" style="padding:18px;margin-bottom:13px">
      <div class="chart-title">Seguridad</div>
      <div class="form-group">
        <label class="form-label">Contrasena</label>
        <p style="font-size:13px;color:var(--stone);margin-bottom:10px">Actualiza tu acceso sin salir del sistema.</p>
        <button class="btn btn-secondary" onclick="openChangePasswordModal()">Cambiar contrasena</button>
      </div>
    </div>
  `;

  if (!isOwner) {
    return `<div style="max-width:580px">
      <div class="page-header"><h2>Configuracion</h2></div>
      ${passwordSection}
    </div>`;
  }

  return `<div style="max-width:580px">
    <div class="page-header"><h2>Configuracion del Sistema</h2></div>
    ${ownerSettings}
    ${passwordSection}
  </div>`;
}

async function saveSettings(section) {
  if (section === 'restaurant') {
    const restaurantName = document.getElementById('setting-nombre').value.trim();
    const rfc = document.getElementById('setting-rfc').value.trim();
    if (!restaurantName) {
      showToast('El nombre del restaurante es obligatorio', 'error');
      return;
    }
    state.settings.restaurantName = restaurantName;
    state.settings.rfc = rfc;
    syncBranding();
  }
  if (section === 'ticket') {
    const ticketName = document.getElementById('setting-ticket-name').value.trim();
    if (!ticketName) {
      showToast('El nombre del restaurante es obligatorio', 'error');
      return;
    }
    state.settings.restaurantName = ticketName;
    state.settings.address = document.getElementById('setting-direccion').value.trim();
    state.settings.phone = document.getElementById('setting-phone').value.trim();
    state.settings.ticketFooter = document.getElementById('setting-ticket-footer').value.trim();
    syncBranding();
  }
  if (section === 'printing') {
    state.settings.currency = document.getElementById('setting-currency').value.trim();
  }
  if (section === 'printers') {
    state.settings.kitchenPrinter = document.getElementById('setting-kitchen-printer').value.trim();
    state.settings.cashPrinter = document.getElementById('setting-cash-printer').value.trim();
  }
  try {
    await fetch('/api/settings', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state.settings)
    });
    showToast('Configuracion guardada', 'success');
    navigateTo('settings');
  } catch (error) {
    console.error('Error saving settings:', error);
    showToast('Error al guardar configuracion', 'error');
  }
}

async function loadBackups() {
  const container = document.getElementById('backup-list');
  if (!container) return;
  try {
    const res = await fetch('/api/backups');
    const backups = await res.json();
    if (!backups.length) {
      container.innerHTML = '<div style="padding:14px;text-align:center;color:var(--stone);font-size:13px">Aun no hay respaldos.</div>';
      return;
    }
    container.innerHTML = backups.map(b => {
      const d = new Date(b.mtime);
      const dateStr = `${d.getDate().toString().padStart(2,'0')}/${(d.getMonth()+1).toString().padStart(2,'0')}/${d.getFullYear()} ${d.getHours().toString().padStart(2,'0')}:${d.getMinutes().toString().padStart(2,'0')}`;
      const sizeKb = Math.round(b.size / 1024);
      return `<div style="display:flex;align-items:center;justify-content:space-between;padding:8px 10px;border-bottom:1px solid var(--accent-mist)">
        <div>
          <div style="font-size:13px;font-weight:500">${dateStr}</div>
          <div style="font-size:11px;color:var(--stone)">${esc(b.name)} - ${sizeKb} KB</div>
        </div>
        <button class="btn btn-secondary btn-sm" onclick="restoreBackup('${esc(b.name)}')">Restaurar</button>
      </div>`;
    }).join('');
  } catch (error) {
    container.innerHTML = '<div style="padding:14px;text-align:center;color:var(--coral);font-size:13px">Error al cargar respaldos.</div>';
  }
}

async function createBackupNow() {
  try {
    const res = await fetch('/api/backups/now', { method: 'POST' });
    const data = await res.json();
    if (data.success) {
      showToast('Respaldo creado: ' + data.name, 'success');
      loadBackups();
    } else {
      showToast(data.error || 'No se pudo crear el respaldo', 'error');
    }
  } catch (error) {
    showToast('Error al crear respaldo', 'error');
  }
}

async function restoreBackup(name) {
  if (!confirm(`Restaurar el respaldo ${name}?\n\nEl sistema se cerrara y debes volver a abrirlo con "Abrir Mesana.cmd".\n\nSe creara un respaldo del estado actual antes de restaurar.`)) return;
  try {
    const res = await fetch('/api/backups/restore', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name })
    });
    const data = await res.json();
    if (data.success) {
      alert('Respaldo restaurado. El servidor se esta cerrando.\n\nVuelve a abrir el sistema con "Abrir Mesana.cmd".');
    } else {
      showToast(data.error || 'No se pudo restaurar', 'error');
    }
  } catch (error) {
    alert('El servidor se cerro. Vuelve a abrirlo con "Abrir Mesana.cmd".');
  }
}

async function handleLogoUpload(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  if (!file.type.startsWith('image/')) {
    showToast('Selecciona una imagen valida', 'error');
    event.target.value = '';
    return;
  }
  const reader = new FileReader();
  reader.onload = async () => {
    state.settings.logoDataUrl = String(reader.result || '');
    try {
      await fetch('/api/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(state.settings)
      });
      syncBranding();
      showToast('Logo actualizado', 'success');
      navigateTo('settings');
    } catch (error) {
      console.error('Error saving logo:', error);
      showToast('Error al guardar logo', 'error');
    }
  };
  reader.onerror = () => {
    showToast('No se pudo cargar el logo', 'error');
  };
  reader.readAsDataURL(file);
}

async function removeStoreLogo() {
  state.settings.logoDataUrl = '';
  try {
    await fetch('/api/settings', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state.settings)
    });
    syncBranding();
    showToast('Logo eliminado', 'success');
    navigateTo('settings');
  } catch (error) {
    console.error('Error removing logo:', error);
    showToast('Error al eliminar logo', 'error');
  }
}

// ===================== CHANGE PASSWORD =====================
function openChangePasswordModal() {
  resetPasswordForm();
  openModal('changePasswordModal');
}

function resetPasswordForm() {
  document.getElementById('cpCurrent').value = '';
  document.getElementById('cpNew').value = '';
  document.getElementById('cpConfirm').value = '';
  document.getElementById('passwordErr').style.display = 'none';
  document.getElementById('passwordErr').textContent = '';
}

async function confirmChangePassword() {
  const current = document.getElementById('cpCurrent').value.trim();
  const next = document.getElementById('cpNew').value.trim();
  const confirm = document.getElementById('cpConfirm').value.trim();
  const error = document.getElementById('passwordErr');

  if (!current || !next || !confirm) {
    error.textContent = 'Completa todos los campos';
    error.style.display = 'block';
    return;
  }
  if (next.length < 6) {
    error.textContent = 'La contrasena debe tener al menos 6 caracteres';
    error.style.display = 'block';
    return;
  }
  if (next !== confirm) {
    error.textContent = 'Las contrasenas no coinciden';
    error.style.display = 'block';
    return;
  }

  const account = getAccountByEmail(currentUser.email);
  if (!account || account.pass !== current) {
    error.textContent = 'La contrasena actual es incorrecta';
    error.style.display = 'block';
    return;
  }
  if (next === current) {
    error.textContent = 'La nueva contrasena debe ser diferente';
    error.style.display = 'block';
    return;
  }

  try {
    if (currentUser.role === 'owner') {
      state.owner.pass = next;
      await fetch(`/api/users/${state.owner.id || 1}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...state.owner, pass: next })
      });
    } else {
      const employee = getEmployeeByEmail(currentUser.email);
      if (!employee) return;
      employee.pass = next;
      await fetch(`/api/users/${employee.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(employee)
      });
    }
    closeModal('changePasswordModal');
    resetPasswordForm();
    showToast('Contrasena actualizada correctamente', 'success');
  } catch (error) {
    console.error('Error changing password:', error);
    showToast('Error al cambiar contrasena', 'error');
  }
}

// ===================== SEARCH =====================
function doGlobalSearch(value) {
  const title = document.getElementById('topbarTitle').textContent;
  if (title === 'Punto de Venta') {
    const grid = document.getElementById('menuGrid');
    if (grid) grid.innerHTML = renderMenuItems(value);
    return;
  }
  if (!value || value.length < 2) {
    closeModal('searchModal');
    return;
  }
  const results = state.products.filter((product) => (
    product.name.toLowerCase().includes(value.toLowerCase())
    || product.cat.toLowerCase().includes(value.toLowerCase())
  ));
  document.getElementById('searchCount').textContent = `${results.length} resultado(s) para "${value}"`;
  document.getElementById('searchGrid').innerHTML = results.length
    ? results.map((product) => `<div class="menu-item">
        <div class="mi-icon">${CAT_ICONS[product.cat] || DEFAULT_ICON}</div>
        <div class="mi-name">${esc(product.name)}</div>
        <div class="mi-price">$${fmt(product.price)} MXN</div>
        <div class="mi-stock">Stock: ${product.stock} · ${esc(product.cat)}</div>
      </div>`).join('')
    : `<div style="grid-column:1/-1;text-align:center;padding:20px;color:var(--stone)">Sin resultados</div>`;
  openModal('searchModal');
}

// ===================== COMMON =====================
function restricted() {
  return `<div class="restricted-page">
    <div class="restricted-icon"><svg width="52" height="52" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.2"><rect x="3" y="11" width="18" height="11" rx="2"/><path stroke-linecap="round" stroke-linejoin="round" d="M7 11V7a5 5 0 0110 0v4"/></svg></div>
    <h3>Acceso restringido</h3>
    <p>Esta seccion es exclusiva para propietarios del restaurante.</p>
  </div>`;
}

function openModal(id) {
  document.getElementById(id).classList.add('open');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal-overlay')) {
    event.target.classList.remove('open');
  }
});

function showToast(message, type) {
  const container = document.getElementById('toastCt');
  const toast = document.createElement('div');
  toast.className = `toast ${type || ''}`;
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
}

function startClock() {
  if (clockTimer) clearInterval(clockTimer);
  function tick() {
    const element = document.getElementById('clockEl');
    if (element) {
      element.textContent = new Date().toLocaleTimeString('es-MX', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
    }
  }
  tick();
  clockTimer = setInterval(tick, 1000);
}

// ===================== BOOT =====================
document.addEventListener('DOMContentLoaded', async () => {
  await loadDataFromAPI();
  fillAccount('admin@mesana.mx', state.owner.pass || 'admin123');
});
