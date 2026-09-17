---
title: Ansible Automation – Use Case Gallery
theme: white
highlightTheme: github-dark
css: custom.css
scripts:
  - plugin/search/search.js
  - plugins.js
revealOptions:
  transition: slide
  transitionSpeed: fast
  center: false
  slideNumber: true
  controls: true
  progress: true
  width: 1280
  height: 720
  margin: 0.04        # reduce whitespace around slides (default 0.04–0.1)
  minScale: 0.2
  maxScale: 2.0
---

<!-- .slide: class="vcenter" -->
# Ansible Automation
## Use Case Gallery

A curated, ever-growing reference of automation use cases across infrastructure, cloud, security, and AI.

---

## What Can You Automate?

Ansible covers the full stack — from bare metal to cloud, from OS patching to AI inference.

<div class="card-grid three-col">
  <div class="card">
    <h4>Infrastructure Provisioning</h4>
    <p>Deploy and manage bare metal, VMs, and cloud resources — full lifecycle from provision to decommission.</p>
  </div>
  <div class="card">
    <h4>Security &amp; Compliance</h4>
    <p>Harden, scan, patch, and audit — continuously enforce your security baseline fleet-wide.</p>
  </div>
  <div class="card">
    <h4>Application Deployment &amp; CI/CD</h4>
    <p>Standardised deployments, rolling updates, and pipeline integration from dev to prod.</p>
  </div>
  <div class="card">
    <h4>Cloud Automation</h4>
    <p>Provision and govern resources across AWS, Azure, and GCP from a single control plane.</p>
  </div>
  <div class="card">
    <h4>AI &amp; AIOps</h4>
    <p>Provision GPU nodes, deploy inference endpoints, and automate event-driven remediation.</p>
  </div>
  <div class="card">
    <h4>Network &amp; Edge</h4>
    <p>Standardise network config and manage disconnected or remote edge nodes at scale.</p>
  </div>
</div>

---

*Ansible Automation – Use Case Gallery*

## Agenda

- [Immutable Infrastructure & Provisioning](#/immutable-infra)
- [AI Automation](#/ai-automation)
- [Security & Compliance](#/security)
- [OpenShift Container Platform](#/openshift)
- [Database & Middleware](#/database)
- [Infrastructure Management](#/infrastructure)
- [Cloud Automation](#/cloud)
- [Emerging Use Cases](#/emerging)
- [GCC Migration & Cloud Management](#/gcc)

---

<!-- .slide: class="vcenter" id="immutable-infra" -->
# Immutable Infrastructure & Provisioning

---

*Immutable Infrastructure*

## Immutable Infrastructure

<div class="card-grid">
  <div class="card">
    <h4>Infrastructure as Code (IaC)</h4>
    <p>Version-controlled playbooks so any environment can be rebuilt identically on demand.</p>
  </div>
  <div class="card">
    <h4>Deployment Strategy Automation</h4>
    <p>Blue-green, canary, and rolling deployments — zero downtime releases.</p>
  </div>
  <div class="card">
    <h4>Self-Service Infrastructure Catalog</h4>
    <p>AAP-backed service catalog so teams can provision pre-approved infrastructure without waiting on operations.</p>
  </div>
</div>

---

## Provisioning

- **Bare Metal Provisioning**: OS install, network config, and baseline hardening via PXE, Foreman, or Satellite.
- **VM Provisioning from Templates**: Deploy VMs on RHV, VMware, or Hyper-V from golden image templates.
- **Deployment Strategy Automation**: Orchestrate blue-green, canary, and rolling deployments across VM or container fleets.
- **Self-Service Infrastructure Portal**: Teams request pre-approved configurations via AAP — no ops ticket required.

> For cloud-specific provisioning see the **Cloud Automation** section.

---

<!-- .slide: class="vcenter" id="ai-automation" -->
# AI Automation

---

## AIOps

<div class="card-grid">
  <div class="card">
    <h4>Event-Driven Automated Response</h4>
    <p>EDA listens for observability signals and immediately triggers a targeted remediation workflow.</p>
  </div>
  <div class="card">
    <h4>AI-Assisted Diagnosis</h4>
    <p>AAP coordinates with an LLM (e.g. Red Hat AI) to analyse, summarise root cause, and notify via ITSM or chat.</p>
  </div>
  <div class="card">
    <h4>Auto-Generated Remediation Playbooks</h4>
    <p>Lightspeed generates a playbook from the incident, syncs to Git, and executes — fully automated.</p>
  </div>
  <div class="card">
    <h4>ITSM Ticket Enrichment</h4>
    <p>Ansible gathers live context (logs, metrics, topology) before the ticket reaches a human operator.</p>
  </div>
</div>

---

## AI Infrastructure Deployment

<div class="card-grid">
  <div class="card">
    <h4>AI Infrastructure Provisioning</h4>
    <p><code>infra.ai</code> collection provisions EC2 instances, VPCs, and security groups for AI/ML workloads.</p>
  </div>
  <div class="card">
    <h4>RHEL AI / OpenShift AI Node Config</h4>
    <p>Packages, kernel settings, and container runtimes ready for RHEL AI or OpenShift AI from day one.</p>
  </div>
  <div class="card">
    <h4>GPU Coordination</h4>
    <p>GPU driver install, CUDA config, and resource coordination across storage, network, and compute.</p>
  </div>
  <div class="card">
    <h4>Edge / IoT Device Onboarding</h4>
    <p>Enroll edge and IoT devices and configure data sync pipelines to central AI platforms.</p>
  </div>
</div>

---

*AI Automation*

## Model Build &amp; Data Pipeline

<div class="card-grid">
  <div class="card">
    <h4>Vector Database Deployment</h4>
    <p>Deploy Milvus, Weaviate, or Qdrant as knowledge stores for RAG use cases.</p>
  </div>
  <div class="card">
    <h4>Vertex AI Feature Store</h4>
    <p>Provision GCP Feature Stores (<code>gcp_vertexai_feature_store</code>) for consistent ML feature serving.</p>
  </div>
</div>

---

*AI Automation*

## Model Inferencing

<div class="card-grid">
  <div class="card">
    <h4>InstructLab Inference Endpoint</h4>
    <p><code>redhat.ai</code> collection deploys InstructLab with an OpenAI-compatible endpoint.</p>
  </div>
  <div class="card">
    <h4>Agentic Workflow Deployment</h4>
    <p>Deploy reasoning engines on Vertex AI (<code>gcp_vertexai_reasoning_engine</code>).</p>
  </div>
</div>

---

*AI Automation*

## AI-Assisted Content Generation

<div class="card-grid">
  <div class="card">
    <h4>Ansible Lightspeed Task Generation</h4>
    <p>Generate playbook tasks from plain-language descriptions — directly inside VS Code.</p>
  </div>
  <div class="card">
    <h4>Continuous Improvement Loop</h4>
    <p>Test → feedback → refined playbook — a closed-loop quality gate for Ansible content.</p>
  </div>
</div>

---

<!-- .slide: class="vcenter" id="security" -->
# Security & Compliance

---

## Security Management

- **Incident Response Automation**: Isolate affected hosts, capture forensic data, and notify security teams automatically.
- **Security Agent Deployment**: Install Imperva, Trend Micro, McAfee, Splunk UF, Nessus, Carbon Black EDR — consistently fleet-wide.
- **CyberArk Credential Retrieval**: Fetch just-in-time privileged credentials at runtime — no secrets in playbooks.
- **Fortigate / Palo Alto / F5**: Config backup, failover/failback, patching, firmware upgrades, and lifecycle management.

---

## OS Patching

**Linux**
- **RHEL/SUSE via Satellite**: Pre/post health checks, errata-based patching, automatic reboot orchestration.
- **Patch Scheduling with Rollback**: Maintenance windows + snapshot restore if post-patch validation fails.

**Windows**
- **WSUS-Driven Patch Management**: Category filtering (security, critical), configurable reboot policies, fleet-wide.
- **Coordinated Fleet Reboots**: Pre-patch snapshots across the Windows fleet before any changes apply.

**Both**
- **Firmware Upgrades** · **Compliance Reporting** · **Rollback Management**

---

## Security & Compliance — Hardening

- **CIS Benchmark Hardening (Linux)**: CIS Level 1/2 for RHEL, SUSE, Ubuntu — with pre/post compliance scoring.
- **CIS Benchmark Hardening (Windows)**: Audit policies, registry settings, service states — idempotent fleet-wide.
- **Kubernetes / OpenShift Hardening**: CIS benchmark controls applied to cluster nodes and API server configs.
- **Hardening Rollback**: Apply → validate → auto-revert if required services fail post-hardening checks.

---

## Security & Compliance — Scanning & Vulnerability

**Compliance Scanning**
- **OpenSCAP Scanning**: XCCDF results and HTML reports for auditors on RHEL/SUSE hosts.
- **Windows Compliance**: STIG/CIS audit — policies, registry, password rules — with deviation reports.
- **Drift Remediation**: Detect and auto-remediate configuration drift from approved baselines every run.

**Vulnerability Management**
- **Nessus / Nexpose Integration**: Scan → ingest → auto-remediate low-risk CVEs without change windows.
- **EDA-Triggered Remediation**: SIEM alerts trigger targeted remediation job templates automatically.
- **VAPT Orchestration**: Coordinate scans, aggregate findings, generate consolidated security reports.

---

<!-- .slide: class="vcenter" id="openshift" -->
# OpenShift Container Platform

---

## OpenShift Day 2 Operations

<div class="card-grid three-col">
  <div class="card">
    <h4>Cluster Upgrade</h4>
    <p>Automated upgrades via update channel with pre/post validation — no manual intervention.</p>
  </div>
  <div class="card">
    <h4>Worker Node Auto-Scaling</h4>
    <p>Scale node count via MachineSet automation based on workload demand.</p>
  </div>
  <div class="card">
    <h4>AD Group Synchronisation</h4>
    <p>Sync LDAP/AD groups to OpenShift RBAC roles on schedule — consistent access control.</p>
  </div>
  <div class="card">
    <h4>Certificate Rotation</h4>
    <p>Rotate cluster and ingress TLS certificates before expiry — zero downtime.</p>
  </div>
  <div class="card">
    <h4>Object Pruning</h4>
    <p>Prune stale builds, images, and namespaces to reclaim cluster resources automatically.</p>
  </div>
</div>

---

## OpenShift Business Continuity & CD

**Business Continuity**
- **etcd Backup**: Scheduled backups shipped to external storage — DR-ready.
- **GTM Failover**: DNS failover to standby cluster when primary fails health checks.
- **Cluster Rebuild**: Full rebuild from etcd backup to minimise RTO.

**Application Deployment/CD**
- **Namespace Creation**: Quotas, limit ranges, and RBAC applied at creation time.
- **Network Policy Enforcement**: Kubernetes NetworkPolicies for microsegmentation.
- **Application Upgrade**: Rolling upgrades with automated health checks and rollback.

**Compliance**
- **CIS OpenShift Scanning** · **Compliance Operator Integration** → HTML reports for auditors.

---

<!-- .slide: class="vcenter" id="database" -->
# Database & Middleware

---

## Database & Middleware

- **Install & Configure**: MySQL, MSSQL, Oracle DB, PostgreSQL, MariaDB — consistent settings and schemas.
- **Middleware Deployment**: WebLogic, Apache, NGINX, Tomcat, WebSphere, JBoss EAP — standardised and secure.
- **Health Checks**: Connectivity, tablespace usage, replication lag — alert on anomalies automatically.
- **Housekeeping & Archival**: Archive partitions, rebuild indexes, purge expired data on schedule.
- **Patching**: PSUs, RUs, hotfixes with pre/post validation and rollback capability.
- **Hardening & Compliance**: CIS benchmarks for MySQL, MariaDB, MSSQL, PostgreSQL + audit reports.
- **Platform Lifecycle**: Jira, Confluence, Bitbucket, Bamboo, MinIO, IBM MQ — repeatable playbooks.

---

<!-- .slide: class="vcenter" id="infrastructure" -->
# Infrastructure Management

---

## VMware Automation

<div class="card-grid three-col">
  <div class="card">
    <h4>Datacenter &amp; Cluster Management</h4>
    <p>HA, DRS, resource allocation — consistent compute estate-wide.</p>
  </div>
  <div class="card">
    <h4>Resource Pool Management</h4>
    <p>CPU, memory, storage shares — guaranteed resources per workload.</p>
  </div>
  <div class="card">
    <h4>Virtual Network Management</h4>
    <p>DVS, port groups, VLANs — automated provisioning and security policies.</p>
  </div>
  <div class="card">
    <h4>Storage Management</h4>
    <p>NFS, VMFS, vSAN datastores — storage policies, rescanning, volume extension.</p>
  </div>
  <div class="card">
    <h4>Content Library Management</h4>
    <p>VM templates and ISOs synchronised across vCenter instances.</p>
  </div>
  <div class="card">
    <h4>VUM / vLCM Patching</h4>
    <p>ESXi, VMware Tools, virtual appliances — scheduled windows, compliance reports.</p>
  </div>
  <div class="card">
    <h4>RBAC Management</h4>
    <p>Roles and permissions enforced consistently — no privilege sprawl.</p>
  </div>
</div>

---

## Network Configurations

- **Device Config Standardisation**: Identical baseline configs on new devices — no manual CLI.
- **VLAN & Interface Provisioning**: Cisco IOS/XE, NX-OS, ACI — single playbook, reduced change time.
- **Firewall Rule Management**: Palo Alto, F5, AWS/Azure FW — version-controlled, with rollback.
- **AlgoSec / Tufin Orchestration**: Policy validation before pushing changes — automated CAB process.
- **SD-WAN Automation**: vEdge, Cisco SD-WAN — profiles, policies, zero-touch provisioning.
- **Infoblox IPAM Integration**: Allocate/release IPs via API — no manual IPAM updates.
- **Config Backup**: Cisco IOS/XE, Palo Alto, F5, ACI — version-controlled for audit and rollback.
- **Compliance & Hardening**: CIS/vendor benchmarks across Cisco, F5, Palo Alto, AlgoSec fleet.

---

## Certificate Lifecycle & Identity

**Certificate Lifecycle Management**
- **Automated Issuance**: Let's Encrypt, HashiCorp Vault PKI, Red Hat Certificate System — no manual CSRs.
- **Proactive Renewal**: Threshold-based renewal before expiry — prevents unplanned outages.
- **Fleet-Wide Distribution**: Push renewed certs to servers, LBs, and network devices in one run.
- **TLS Enforcement**: Approved cipher suites and TLS versions — auto-remediate drift.

**Identity and Access Management**
- **Red Hat IdM / FreeIPA**: Server and replica topology with DNS, Kerberos, and CA from day one.
- **AD Domain Join**: Linux and Windows domain join at provisioning time.
- **SSH Key Rotation**: Distribute and rotate authorised keys fleet-wide on schedule.
- **PAM Integration**: CyberArk, HashiCorp Vault, BeyondTrust — just-in-time credentials at runtime.

---

## Edge &amp; Disconnected Environments

<div class="card-grid three-col">
  <div class="card">
    <h4>RHEL for Edge Provisioning</h4>
    <p>rpm-ostree images via Image Builder — immutable, rollback-capable OS at the edge.</p>
  </div>
  <div class="card">
    <h4>Zero-Touch Provisioning (ZTP)</h4>
    <p>Remote/branch nodes self-configure on first boot — no on-site engineer required.</p>
  </div>
  <div class="card">
    <h4>Air-Gapped Management</h4>
    <p>Mirrored collections and offline content — no internet required at runtime.</p>
  </div>
  <div class="card">
    <h4>Low-Bandwidth Config Push</h4>
    <p>Incremental, idempotent updates over constrained network links.</p>
  </div>
  <div class="card">
    <h4>Edge-Local EDA Remediation</h4>
    <p>Detect and remediate local faults autonomously without a cloud round-trip.</p>
  </div>
  <div class="card">
    <h4>IoT Device Onboarding</h4>
    <p>Enroll sensors and gateways, configure data sync to central AI platforms.</p>
  </div>
</div>

---

<!-- .slide: class="vcenter" id="cloud" -->
# Cloud Automation

---

## Amazon Web Services

Using `amazon.aws` and `community.aws` collections.

- **Compute**: EC2 instances, launch templates, Auto Scaling Groups — start/stop/terminate on schedule.
- **Networking**: VPCs, subnets, route tables, IGW, NAT GW, security groups.
- **Storage**: S3 buckets, lifecycle rules, cross-region replication.
- **Databases**: RDS instances, parameter groups, subnet groups, read replicas.
- **IAM**: Users, roles, policies, instance profiles — least-privilege enforced.
- **Containers**: EKS clusters, node groups, and add-ons.
- **Serverless**: Lambda functions, triggers, layers.
- **Monitoring**: CloudWatch alarms, dashboards, log groups, metric filters.

---

## Amazon Web Services (cont.)

- **DNS**: Route 53 hosted zones, A/CNAME/MX records, health checks.
- **Secrets**: Rotate secrets in AWS Secrets Manager — sync to Vault or Ansible Vault.
- **Messaging**: SQS queues and SNS topics — subscriptions and dead-letter queues.
- **Organizations**: Vend new AWS accounts with SCPs and baseline guardrails.
- **Cost Control**: Budget alerts, tag enforcement, identify and remediate untagged resources.
- **Patching**: OS patching via SSM Patch Manager — compliance reported back to AAP.
- **ECR**: Repository lifecycle policies and image scanning.
- **Load Balancing**: ALBs, target groups, listener rules (`community.aws.elb_application_lb`).

---

## Microsoft Azure

Using `azure.azcollection` collection.

- **Compute**: VMs, VMSS, availability sets — full lifecycle management.
- **Networking**: VNets, subnets, NSGs, route tables, public IPs.
- **Databases**: Azure SQL, Managed Instances, PostgreSQL Flexible Server, CosmosDB.
- **AKS**: Kubernetes clusters, node pools, RBAC bindings.
- **App Service**: App Service plans, web apps, function apps, deployment slots.
- **Identity**: Entra ID users, groups, service principals, app registrations.
- **Key Vault**: Secrets, keys, certificates — access policies enforced.
- **Monitoring**: Alert rules, action groups, Log Analytics workspaces, diagnostics.
- **Policy**: Azure Policy definitions and assignments for compliance.
- **Arc**: Onboard Arc-enabled servers and Kubernetes for hybrid governance.

---

## Google Cloud Platform

Using `google.cloud` (`gcp_*`) collection.

- **Compute**: GCE instances, instance templates, managed instance groups.
- **Networking**: VPC networks, subnets, firewall rules, Cloud Router.
- **Load Balancing**: HTTP(S), TCP/UDP, and internal LBs with health checks.
- **Storage**: Cloud Storage buckets, IAM bindings, lifecycle rules.
- **Databases**: Cloud SQL (MySQL, PostgreSQL, SQL Server), users, databases.
- **GKE**: Kubernetes Engine clusters and node pools.
- **IAM**: Service accounts, roles, project-level bindings.
- **Pub/Sub**: Topics and subscriptions for event-driven architectures.
- **Vertex AI**: Feature Stores, vector search indexes, reasoning engines.
- **Security**: Cloud Armor WAF, VPC Service Controls, Security Command Center.

---

## Multi-Cloud Governance

- **Consistent Tagging Enforcement**: Tag, naming, and cost policies across AWS, Azure, GCP — one AAP workflow.
- **Cross-Cloud Cost Visibility**: Unified cost reports, flag idle/untagged resources, trigger right-sizing.
- **Account Vending**: New AWS accounts, Azure subscriptions, GCP projects — guardrails applied at creation.
- **Policy-as-Code Drift Remediation**: SCPs, Azure Policy, GCP Org Policy — detect and auto-remediate drift.
- **Cross-Cloud Identity Federation**: Unified role mappings across IAM Identity Center, Entra ID, GCP IAM.
- **Unified Backup & DR**: Coordinated backup and failover across cloud providers from one control plane.
- **Network Interconnect**: VPN gateways, transit routing, inter-cloud peering — consistent and secure.

---

<!-- .slide: class="vcenter" id="emerging" -->
# Emerging Use Cases

---

## Emerging Use Cases

<div class="card-grid three-col">
  <div class="card">
    <h4>Event-Driven Remediation</h4>
    <p>EDA watches alerts and webhooks — triggers targeted fixes automatically.</p>
  </div>
  <div class="card">
    <h4>EE Lifecycle Management</h4>
    <p>Build, test, publish, and update AAP EEs on schedule.</p>
  </div>
  <div class="card">
    <h4>Secrets Rotation</h4>
    <p>Rotate DB passwords and API keys on schedule — zero downtime.</p>
  </div>
  <div class="card">
    <h4>ITSM-Triggered Automation</h4>
    <p>ServiceNow / Jira approvals auto-launch the right remediation job.</p>
  </div>
  <div class="card">
    <h4>GitOps Reconciliation</h4>
    <p>Enforces Git state — detects and remediates drift automatically.</p>
  </div>
  <div class="card">
    <h4>Compliance-as-Code in CI/CD</h4>
    <p>Blocks non-compliant infra changes in pipelines before production.</p>
  </div>
  <div class="card">
    <h4>Supply Chain Security</h4>
    <p>SBOM generation, and dependency scanning.</p>
  </div>
  <div class="card">
    <h4>FinOps Automation</h4>
    <p>Cost anomalies trigger right-sizing or decommission workflows.</p>
  </div>
  <div class="card">
    <h4>Lightspeed Dev Workflows</h4>
    <p>Generate collection-aware tasks from natural language in VS Code.</p>
  </div>
</div>

---

<!-- .slide: class="vcenter" id="gcc" -->
# GCC Migration & Cloud Management

---

*GCC Migration*

## VM Workload Migration to GCC

<div class="card-grid">
  <div class="card">
    <h4>Pre-Migration Assessment</h4>
    <p>Inventory hosts, map app dependencies, assess OS compatibility — produce a wave-ready migration report.</p>
  </div>
  <div class="card">
    <h4>Wave Orchestration</h4>
    <p>Schedule phased migrations with coordinated network, storage, and compute changes per wave.</p>
  </div>
  <div class="card">
    <h4>Automated Cutover</h4>
    <p>DNS updates, load balancer reconfiguration, and health validation — executed in sequence, no manual steps.</p>
  </div>
  <div class="card">
    <h4>Post-Migration Validation</h4>
    <p>Connectivity checks, service smoke tests, and compliance verification after every migration wave.</p>
  </div>
</div>

---

*GCC Migration*

## Cloud-to-Cloud Migration (Public → GCC)

<div class="card-grid">
  <div class="card">
    <h4>Cross-Cloud Inventory</h4>
    <p>Discover and catalog VMs, data volumes, and IAM resources on the source cloud before migration begins.</p>
  </div>
  <div class="card">
    <h4>Data Migration Orchestration</h4>
    <p>Coordinate replication pipelines to GCC-approved storage with checksum and integrity verification.</p>
  </div>
  <div class="card">
    <h4>Identity Remapping</h4>
    <p>Translate source IAM roles and policies to GCC-compliant access controls on the target cloud.</p>
  </div>
  <div class="card">
    <h4>Network Reconfiguration</h4>
    <p>Update routing tables, security groups, and firewall rules to match GCC network topology and controls.</p>
  </div>
</div>

---

*GCC Operations*

## Managing GCC Workloads with AAP

<div class="card-grid three-col">
  <div class="card">
    <h4>Compliance Baseline Enforcement</h4>
    <p>Apply GCC security baselines continuously — detect and auto-remediate drift.</p>
  </div>
  <div class="card">
    <h4>Patch Management</h4>
    <p>Orchestrate patching with pre/post validation and audit reports.</p>
  </div>
  <div class="card">
    <h4>Certificate Rotation</h4>
    <p>Renew and distribute TLS certificates across GCC services before expiry.</p>
  </div>
  <div class="card">
    <h4>Day 2 Operations</h4>
    <p>Scaling, backup, snapshot, and housekeeping — all via AAP job templates.</p>
  </div>
  <div class="card">
    <h4>Cost Optimisation</h4>
    <p>Flag idle/untagged resources, trigger right-sizing, enforce tagging policies.</p>
  </div>
  <div class="card">
    <h4>Access Control Enforcement</h4>
    <p>Periodic IAM review — remove stale accounts and enforce least-privilege.</p>
  </div>
</div>

---

*GCC Operations*

## AAP + Terraform Enterprise Integration

<div class="card-grid">
  <div class="card">
    <h4>Terraform Plan Approval Gate</h4>
    <p>AAP receives TFE plan output, routes for human approval via ITSM or chat, then triggers apply.</p>
  </div>
  <div class="card">
    <h4>Drift Detection &amp; Remediation</h4>
    <p>Scheduled AAP jobs detect Terraform state drift and trigger corrective TFE runs automatically.</p>
  </div>
  <div class="card">
    <h4>GitOps Pipeline</h4>
    <p>Git commit → TFE plan → AAP approval → TFE apply → AAP post-provisioning config in one workflow.</p>
  </div>
  <div class="card">
    <h4>Workspace Lifecycle Management</h4>
    <p>Create, manage, and destroy TFE workspaces via API — standardised environments on demand.</p>
  </div>
</div>

---

<!-- .slide: class="vcenter" -->
# Thank You

[gineesh.com/ansible-use-case-gallery](https://gineesh.com/ansible-use-case-gallery)
