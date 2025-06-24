# 🎲 React Lottery Game - Quick Recap

## ✅ What I Learned:

### 1️⃣ Component Decomposition
- Break big UI into small, reusable pieces for better structure and maintenance.


### 2️⃣ Types of Components
- **Logical Components** 👉 Handle state and logic (Example: `Lottery` component).
- **Presentational Components** 👉 Only responsible for UI (Example: `Ticket` and `TicketNum` components).


### 3️⃣ State Hierarchy & Lifting State Up
- Keep state in the highest component that needs to control or share it.
- Pass data down via `props`.


**Example Structure:**


App Component
└─ Lottery Component (Holds State) [Logical]
└─ Ticket Component [Presentational]
└─ TicketNum Component [Presentational]



---

💡 **Summary:** Keep logic at the top, UI at the bottom, pass data with `props`, and decompose your app into clean, simple parts.

