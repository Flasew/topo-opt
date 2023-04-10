---
permalink: /abstract/
title: "Abstract"
layout: single
author_profile: true
classes: wide
header:
  overlay_image: ../topo.jpg
---

We propose TopoOpt, a novel direct-connect fabric for deep neural network (DNN) training workloads. TopoOpt cooptimizes the distributed training process across three dimensions: computation, communication, and network topology.
We demonstrate the mutability of AllReduce traffic, and leverage this property to construct efficient network topologies
for DNN training jobs. TopoOpt then uses an alternating
optimization technique and a group theory-inspired algorithm
called TotientPerms to find the best network topology and
routing plan, together with a parallelization strategy. We build
a fully functional 12-node direct-connect prototype with remote direct memory access (RDMA) forwarding at 100 Gbps.
Large-scale simulations on real distributed training models
show that, compared to similar-cost Fat-tree interconnects,
TopoOpt reduces DNN training time by up to 3.4×.