---
title: "IPv6 — The Why & The Big Picture"
date: "2026-01-09"
description: "A tour through the world of IPv6, its features, benefits, adoption, why it matters, and how it compares to IPv4."
---

## Introduction to IPv6
IPv6, or Internet Protocol version 6, is the most recent version of the Internet Protocol (IP), which is the set of rules governing the format of data sent over the internet or local network. It was developed to address the limitations of its predecessor, IPv4, particularly the exhaustion of available IP addresses.

## IPv4: The Original Internet Protocol

The Internet Protocol has evolved over time, but **IPv4**, introduced in the 1980s, remained the backbone of the internet for decades. It was built around a simple idea:

> Devices should be able to communicate **directly** with each other using **unique IP addresses**.

### Addressing in IPv4

IPv4 uses a **32-bit address space**, typically written as four 8-bit segments (for example, `192.168.1.1`).

This design allows for:

- **2^32^ total addresses**
- Approximately **4.3 billion unique IP addresses**

In the early days of the internet, this number felt comfortably large.

### When the Internet Outgrew IPv4

As the internet expanded, that assumption began to break down. Today, a single household may contain multiple:

- Phones  
- Laptops  
- Smart TVs  
- Game consoles  
- IoT devices

Multiply that by billions of households, and it becomes clear that the IPv4 address pool is no longer sufficient.

### Network Address Translation (NAT)

To delay IPv4 exhaustion, the industry introduced **Network Address Translation (NAT)**.

NAT works by:

- Assigning **private IP addresses** to devices inside a local network
- Using **one public IPv4 address** to represent the entire network externally
- Maintaining a **mapping** of internal private addresses and source ports to external public addresses and ports

While NAT was an effective stopgap, it quietly changed how the internet works.

**Key limitations introduced by NAT:**

- Devices behind NAT are **not directly reachable** from the internet
- Peer-to-peer communication requires:
  - Port forwarding
  - Relays
  - NAT traversal techniques

### Carrier-Grade NAT (CGNAT)

Today, NAT is no longer limited to home routers.

Many ISPs now use **Carrier-Grade NAT (CGNAT)**, where:

- Multiple customers share a **single public IPv4 address**
- End-to-end connectivity is further reduced
- Applications may suffer from:
  - Connectivity issues
  - Increased latency
  - Broken inbound connections

### The Reality of IPv4 Today

NAT has kept IPv4 alive far longer than anyone expected—but it came at a cost.

- The original **end-to-end model** of the internet is mostly gone
- Direct device-to-device communication is no longer the default
- Complexity has increased at every layer of the network

IPv4 still works—but it is clearly living on borrowed time.

## IPv6: Restoring the End-to-End Internet

IPv6 was developed in the late 1990s as a long-term solution to the fundamental limitations of IPv4. Rather than extending IPv4 further with workarounds, IPv6 was designed to **fix the problem at its root**: address scarcity.

At its core, IPv6 aims to restore the original vision of the internet—**direct, end-to-end connectivity between devices**—while scaling to meet modern and future demands.

### Addressing in IPv6

IPv6 uses a **128-bit address space**, typically written as eight groups of hexadecimal numbers (for example, `2001:0db8:85a3::8a2e:0370:7334`).

This design allows for:

- **2^128^** total addresses
- An effectively **unlimited address pool**
- The ability to assign **unique, globally routable IPs** to every device

Instead of counting addresses in billions, IPv6 addresses are measured in numbers so large they make exhaustion practically impossible.

### What IPv6 Enables

With abundant address space, IPv6 removes the need for widespread NAT.

This brings several benefits:

- Devices can be **directly reachable** over the internet
- Peer-to-peer communication becomes **simple and native**
- No dependency on:
  - Port forwarding
  - NAT traversal
  - Relay servers (in many cases)

In IPv6, every device can have its own public address—just as the internet originally intended.

### Built for the Modern Internet

IPv6 was designed with modern networking needs in mind:

- Massive scale (IoT, mobile devices, cloud infrastructure)
- Simpler routing through hierarchical addressing
- Mandatory support for features like:
  - Stateless Address Autoconfiguration (SLAAC)
  - IPSec (at the protocol level)

While IPv6 does not magically solve all security problems, it removes complexity that was introduced solely to work around IPv4’s limitations.

### The Transition Reality

Despite its advantages, IPv6 adoption has been gradual.

Today’s internet largely operates in a **dual-stack** world:

- IPv4 and IPv6 run side by side
- NAT and CGNAT still exist
- IPv6 traffic continues to grow steadily

The challenge is no longer technical—it is operational, economic, and organizational.

### The Bigger Picture

IPv6 is not just “IPv4 with more addresses.”

It represents a return to:

- End-to-end connectivity
- Simpler network architectures
- A more scalable foundation for the future internet

IPv4 is being stretched to its limits.  
IPv6 is the protocol the internet was always going to need.

## A Return to First Principles

The internet we use today looks very different from the one IPv4 was designed for. Billions of devices, cloud-native systems, and always-on connectivity demand a protocol that can scale naturally. IPv6 provides that foundation. It’s not just an upgrade—it’s the internet preparing itself for the decades ahead.
