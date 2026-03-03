'use client';

import { motion } from "motion/react";
import { Search, Filter, Download, ArrowUpRight, CheckCircle2, AlertCircle, Clock } from "lucide-react";
import { useState } from "react";

const payments = [
  {
    id: "pay_9k2j3n4k5j6h7g8f",
    date: "2026-03-03 14:32:15",
    asset: "sUSDC",
    amount: "12,450.00",
    status: "completed",
    rail: "Stellar Network",
    hash: "0x7a8f9b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a",
    from: "GABCD...WXYZ",
    to: "GEFGH...STUV",
  },
  {
    id: "pay_8h1j2k3l4m5n6o7p",
    date: "2026-03-03 14:28:42",
    asset: "sBTC",
    amount: "0.2341",
    status: "completed",
    rail: "Stellar Network",
    hash: "0x3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d",
    from: "GIJKL...MNOP",
    to: "GQRST...UVWX",
  },
  {
    id: "pay_7g8h9i0j1k2l3m4n",
    date: "2026-03-03 14:24:08",
    asset: "sETH",
    amount: "5.4321",
    status: "pending",
    rail: "Stellar Network",
    hash: "0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t",
    from: "GYZAB...CDEF",
    to: "GGHIJ...KLMN",
  },
];

export default function PaymentsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <motion.h1
          className="text-2xl sm:text-3xl font-medium mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Payments
        </motion.h1>
        <p className="text-sm text-neutral-400">
          Track and manage all payment transactions
        </p>
      </div>

      {/* Filters */}
      <motion.div
        className="mb-6 flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-neutral-500" />
          <input
            type="text"
            placeholder="Search by ID, hash, or address..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm focus:outline-none focus:border-white/20 transition-colors"
          />
        </div>
        <button className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer">
          <Filter className="size-4" />
          <span className="text-sm">Filters</span>
        </button>
        <button className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer">
          <Download className="size-4" />
          <span className="text-sm">Export</span>
        </button>
      </motion.div>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Total Payments", value: "1,247" },
          { label: "Completed", value: "1,198" },
          { label: "Pending", value: "47" },
          { label: "Failed", value: "2" },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            className="p-4 bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="text-2xl font-medium mb-1">{stat.value}</div>
            <div className="text-xs text-neutral-500">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Payments Table */}
      <motion.div
        className="bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 rounded-xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/5 bg-white/[0.02]">
                <th className="text-left py-4 px-4 text-neutral-500 font-medium whitespace-nowrap">Payment ID</th>
                <th className="text-left py-4 px-4 text-neutral-500 font-medium whitespace-nowrap">Date & Time</th>
                <th className="text-left py-4 px-4 text-neutral-500 font-medium">Asset</th>
                <th className="text-left py-4 px-4 text-neutral-500 font-medium">Amount</th>
                <th className="text-left py-4 px-4 text-neutral-500 font-medium">Status</th>
                <th className="text-left py-4 px-4 text-neutral-500 font-medium">Rail</th>
                <th className="text-left py-4 px-4 text-neutral-500 font-medium whitespace-nowrap">On-chain Hash</th>
                <th className="text-left py-4 px-4 text-neutral-500 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <motion.tr
                  key={payment.id}
                  className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                >
                  <td className="py-4 px-4">
                    <div className="font-mono text-xs">{payment.id}</div>
                  </td>
                  <td className="py-4 px-4 text-neutral-400 whitespace-nowrap">{payment.date}</td>
                  <td className="py-4 px-4">
                    <span className="px-2 py-1 bg-white/5 rounded text-xs font-medium">
                      {payment.asset}
                    </span>
                  </td>
                  <td className="py-4 px-4 font-medium">{payment.amount}</td>
                  <td className="py-4 px-4">
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs whitespace-nowrap ${
                        payment.status === "completed"
                          ? "bg-green-400/10 text-green-400"
                          : payment.status === "pending"
                          ? "bg-yellow-400/10 text-yellow-400"
                          : "bg-red-400/10 text-red-400"
                      }`}
                    >
                      {payment.status === "completed" ? (
                        <CheckCircle2 className="size-3" />
                      ) : payment.status === "pending" ? (
                        <Clock className="size-3" />
                      ) : (
                        <AlertCircle className="size-3" />
                      )}
                      {payment.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-neutral-400 whitespace-nowrap">{payment.rail}</td>
                  <td className="py-4 px-4">
                    <button className="font-mono text-xs text-neutral-500 hover:text-white transition-colors cursor-pointer">
                      {payment.hash.slice(0, 16)}...
                    </button>
                  </td>
                  <td className="py-4 px-4">
                    <button className="text-white hover:text-neutral-400 transition-colors cursor-pointer">
                      <ArrowUpRight className="size-4" />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
