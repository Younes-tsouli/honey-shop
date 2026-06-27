"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import "./account.css";

const ORDERS = [
  { id: "#BH-2041", date: "18 juin 2026", total: 77, status: "Livré" },
  { id: "#BH-1998", date: "3 mai 2026", total: 32, status: "En cours" },
  { id: "#BH-1874", date: "12 avr. 2026", total: 58, status: "Annulé" },
];

const STATUS_COLOR = {
  Livré: "green",
  "En cours": "amber",
  Annulé: "red",
};

export default function Profile() {
  const [tab, setTab] = useState("orders"); // "orders" | "account"
  const [form, setForm] = useState({
    name: "Younes",
    email: "younes@beehive.ma",
  });
  const set = (f) => (e) => setForm((p) => ({ ...p, [f]: e.target.value }));

  return (
    <>
      <Navbar />
      <div className="pf-page">
        {/* ── Header ── */}
        <header className="pf-header">
          <div className="pf-avatar" aria-hidden="true">
            {form.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="pf-name">{form.name}</p>
            <p className="pf-email">{form.email}</p>
          </div>
        </header>

        {/* ── Tabs ── */}
        <div className="pf-tabs">
          <button
            className={`pf-tab${tab === "orders" ? " active" : ""}`}
            onClick={() => setTab("orders")}
          >
            <span className="material-symbols-outlined">receipt_long</span>
            Commandes
          </button>
          <button
            className={`pf-tab${tab === "account" ? " active" : ""}`}
            onClick={() => setTab("account")}
          >
            <span className="material-symbols-outlined">manage_accounts</span>
            Mon compte
          </button>
        </div>

        <div className="pf-body">
          {/* ── Commandes ── */}
          {tab === "orders" && (
            <section className="pf-orders">
              {ORDERS.length === 0 ? (
                <p className="pf-empty">Aucune commande pour l'instant.</p>
              ) : (
                ORDERS.map((order) => (
                  <div key={order.id} className="pf-order">
                    <div className="pf-order-left">
                      <p className="pf-order-id">{order.id}</p>
                      <p className="pf-order-date">{order.date}</p>
                    </div>
                    <span
                      className={`pf-status pf-status--${STATUS_COLOR[order.status]}`}
                    >
                      {order.status}
                    </span>
                    <p className="pf-order-total">{order.total} €</p>
                  </div>
                ))
              )}
            </section>
          )}

          {/* ── Compte ── */}
          {tab === "account" && (
            <section className="pf-account">
              <div className="pf-field">
                <label className="pf-label">Nom</label>
                <input
                  className="pf-input"
                  value={form.name}
                  onChange={set("name")}
                />
              </div>
              <div className="pf-field">
                <label className="pf-label">E-mail</label>
                <input
                  className="pf-input"
                  type="email"
                  value={form.email}
                  onChange={set("email")}
                />
              </div>
              <button className="pf-save-btn">Enregistrer</button>
              <button className="pf-logout-btn">
                <span className="material-symbols-outlined">logout</span>
                Se déconnecter
              </button>
            </section>
          )}
        </div>
      </div>
    </>
  );
}
