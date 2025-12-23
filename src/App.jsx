import React, { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Database,
  Cloud,
  Users,
  Briefcase,
  DollarSign,
  Award,
  Shield,
  CheckCircle,
  Clock,
  FileText,
} from "lucide-react";

const FlexibleEmploymentArchitecture = () => {
  const [activeTab, setActiveTab] = useState("system");
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // 系统架构层级数据
  const systemArchitecture = {
    presentation: {
      title: "展示层",
      color: "#FF6B6B",
      items: [
        { name: "C端移动应用", desc: "iOS/Android原生或混合应用" },
        { name: "B端管理后台", desc: "Web端企业管理系统" },
        { name: "平台运营后台", desc: "Web端超级管理系统" },
      ],
    },
    business: {
      title: "业务层(核心域服务) ⭐️",
      color: "#667eea",
      isCore: true,
      domains: [
        {
          name: "身份域",
          icon: Users,
          services: [
            "C端用户服务(注册/登录/简历)",
            "B端租户服务(多租户/子账号)",
            "权限管理服务(RBAC)",
            "平台用户管理服务",
          ],
        },
        {
          name: "需求域",
          icon: Briefcase,
          services: [
            "职位发布服务",
            "职位展示服务(搜索/筛选)",
            "职位审核服务",
            "岗位要求匹配服务",
          ],
        },
        {
          name: "撮合域",
          icon: Users,
          services: [
            "应聘服务",
            "资格校验服务(规则引擎)",
            "录用管理服务",
            "手动录入服务",
          ],
        },
        {
          name: "履约域",
          icon: Clock,
          services: [
            "考勤打卡服务",
            "工时统计服务",
            "异常处理服务",
            "排班管理服务",
          ],
        },
        {
          name: "结算域",
          icon: DollarSign,
          services: [
            "薪资计算服务",
            "平台结算服务",
            "自行结算服务",
            "提现服务",
            "财务审核服务",
          ],
        },
        {
          name: "信用域",
          icon: Award,
          services: [
            "评价管理服务(B端对C端多维度评价)",
            "出勤统计服务(应聘/出勤/爽约次数)",
            "信用计算等级服务(优秀/良好/一般/差)",
            "申诉处理服务(C端申诉+平台审核)",
          ],
        },
        {
          name: "营销域",
          icon: Award,
          services: [
            "活动发布服务",
            "活动审核服务",
            "奖励发放服务",
            "邀请返利服务",
            "高信用用户专项奖励",
          ],
        },
        {
          name: "审核域",
          icon: CheckCircle,
          services: [
            "B端自定义审核流",
            "平台审核服务",
            "审核规则引擎",
            "审核历史服务",
          ],
        },
        {
          name: "配置域",
          icon: Shield,
          services: [
            "应用配置服务",
            "规则引擎服务",
            "国家/地区配置",
            "功能开关服务",
          ],
        },
      ],
    },
    application: {
      title: "应用层(可配置应用包) - 暂不考虑",
      color: "#cbd5e0",
      disabled: true,
      items: [
        { name: "酒店行业应用包", desc: "包含排班、客房服务等特定功能" },
        { name: "住宅物业应用包", desc: "包含保洁、维修等物业功能" },
        { name: "办公物业应用包", desc: "包含前台、保安等办公场景" },
        { name: "其他行业应用包", desc: "可扩展的行业解决方案" },
      ],
    },
  };

  // 核心业务流程
  const businessFlows = [
    {
      name: "职位发布审核流程",
      steps: [
        { role: "B端用户A", action: "发布职位需求", color: "#FF6B6B" },
        {
          role: "B端审核流",
          action: "按B端角色自定义流程审核",
          color: "#4ECDC4",
          note: "可配置多级审核",
        },
        { role: "平台审核", action: "平台方审核职位合规性", color: "#95E1D3" },
        { role: "系统", action: "审核通过,职位上架到C端", color: "#F38181" },
      ],
    },
    {
      name: "应聘匹配流程(C端主动)",
      steps: [
        {
          role: "C端用户",
          action: "搜索、筛选并浏览职位,点击应聘",
          color: "#FF6B6B",
        },
        {
          role: "规则引擎",
          action: "检查岗位要求匹配度",
          color: "#4ECDC4",
          note: "根据国家配置决定是否允许不符要求投递",
        },
        { role: "应聘服务", action: "提交应聘申请", color: "#95E1D3" },
        { role: "B端用户", action: "查看应聘列表,确认录用", color: "#F38181" },
        { role: "系统", action: "通知C端用户录用结果", color: "#AA96DA" },
      ],
    },
    {
      name: "手动录入流程(平台代录)",
      steps: [
        {
          role: "平台运营",
          action: "录入无智能手机的C端用户信息",
          color: "#FF6B6B",
          note: "针对无手机用户",
        },
        { role: "系统", action: "创建C端用户账号", color: "#4ECDC4" },
        { role: "平台运营", action: "代替用户应聘指定职位", color: "#95E1D3" },
        { role: "B端用户", action: "确认录用", color: "#F38181" },
        { role: "系统", action: "建立用工关系", color: "#AA96DA" },
      ],
    },
    {
      name: "工作考勤流程",
      steps: [
        { role: "C端用户", action: "到岗后上班打卡", color: "#FF6B6B" },
        { role: "考勤服务", action: "记录打卡时间和位置", color: "#4ECDC4" },
        { role: "C端用户", action: "完成工作后下班打卡", color: "#95E1D3" },
        { role: "工时统计", action: "计算实际工作时长", color: "#F38181" },
        { role: "B端用户", action: "查看并确认考勤记录", color: "#AA96DA" },
      ],
    },
    {
      name: "平台结算流程(结算规则策略)",
      steps: [
        {
          role: "规则引擎",
          action: "识别结算模式:平台结算",
          color: "#667eea",
          note: "策略模式-平台结算策略",
        },
        {
          role: "B端用户",
          action: "按固定价格与平台结算",
          color: "#FF6B6B",
          note: "例: 100元/小时",
        },
        { role: "结算服务", action: "计算薪资: 工时×时薪", color: "#4ECDC4" },
        {
          role: "平台策略",
          action: "扣除利润后结算给C端并申报税务",
          color: "#95E1D3",
          note: "例: 给C端80元/小时,平台赚20元。按80元每小时申报税务",
        },
        { role: "C端用户", action: "查看余额,申请提现", color: "#F38181" },
        { role: "财务审核", action: "审核通过,人工转账", color: "#AA96DA" },
        { role: "财务", action: "标记已转账完成", color: "#FCBAD3" },
      ],
    },
    {
      name: "自行结算流程(结算规则策略)",
      steps: [
        {
          role: "规则引擎",
          action: "识别结算模式:自行结算",
          color: "#667eea",
          note: "策略模式-自行结算策略",
        },
        {
          role: "B端用户",
          action: "自行设置薪资并展示",
          color: "#FF6B6B",
          note: "例: 90元/小时",
        },
        { role: "结算服务", action: "计算总薪资给C端", color: "#4ECDC4" },
        {
          role: "B端策略",
          action: "直接支付薪资给C端",
          color: "#95E1D3",
          note: "C端实际收到90元/小时",
        },
        {
          role: "平台",
          action: "按比例收取服务费并申报税务",
          color: "#F38181",
          note: "例: 总薪资的5%,即4.5元",
        },
        { role: "C端用户", action: "查看余额,申请提现", color: "#AA96DA" },
        { role: "财务审核", action: "审核并转账", color: "#FCBAD3" },
      ],
    },
    {
      name: "信用评价流程",
      steps: [
        {
          role: "考勤服务",
          action: "记录出勤情况",
          color: "#FF6B6B",
          note: "应聘/实际出勤/爽约",
        },
        {
          role: "B端用户",
          action: "工作完成后对C端评价",
          color: "#4ECDC4",
          note: "工作态度/技能/准时性等",
        },
        {
          role: "信用计算",
          action: "综合计算信用等级",
          color: "#95E1D3",
          note: "评价+出勤率+工作时长",
        },
        { role: "C端用户", action: "可申诉不公评价", color: "#AA96DA" },
        { role: "平台审核", action: "审核申诉,调整信用", color: "#FCBAD3" },
      ],
    },
  ];

  // 多租户应用配置架构
  const tenantConfig = {
    layers: [
      {
        name: "基础功能层",
        desc: "所有租户共享的核心功能",
        items: [
          "用户管理",
          "职位管理",
          "应聘管理",
          "考勤管理",
          "结算管理",
          "活动管理",
          "信用管理",
        ],
      },
      {
        name: "规则配置层",
        desc: "可根据国家/地区/行业配置的规则",
        items: [
          "应聘资格校验规则",
          "薪资计算规则",
          "税费计算规则",
          "加班费规则",
          "审核流程规则",
          "信用限制规则",
        ],
      },
      {
        name: "功能开关层 - 暂不考虑",
        desc: "按应用包开启/关闭功能(暂不考虑)",
        disabled: true,
        items: [
          "排班功能(酒店专用)",
          "客房服务(酒店专用)",
          "维修工单(物业专用)",
          "访客管理(办公专用)",
        ],
      },
      {
        name: "应用包层 - 暂不考虑",
        desc: "打包配置交付给B端租户(暂不考虑)",
        disabled: true,
        items: [
          "酒店应用包 = 基础功能 + 酒店规则 + 酒店功能",
          "物业应用包 = 基础功能 + 物业规则 + 物业功能",
          "办公应用包 = 基础功能 + 办公规则 + 办公功能",
        ],
      },
    ],
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "40px 20px",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* 标题区域 */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "50px",
            color: "white",
          }}
        >
          <h1
            style={{
              fontSize: "48px",
              fontWeight: "800",
              marginBottom: "15px",
              textShadow: "0 2px 20px rgba(0,0,0,0.3)",
            }}
          >
            灵活用工平台系统架构
          </h1>
          <p
            style={{
              fontSize: "18px",
              opacity: 0.9,
              fontWeight: "300",
            }}
          >
            多租户 · 多应用 · 可配置 · 可扩展
          </p>
        </div>

        {/* Tab 切换 */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          {[
            { id: "system", name: "系统架构图", icon: Cloud },
            { id: "flow", name: "业务流程图", icon: FileText },
            { id: "tenant", name: "多租户配置", icon: Shield },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: "15px 35px",
                  fontSize: "16px",
                  fontWeight: "600",
                  border: "none",
                  borderRadius: "12px",
                  background:
                    activeTab === tab.id ? "white" : "rgba(255,255,255,0.2)",
                  color: activeTab === tab.id ? "#667eea" : "white",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow:
                    activeTab === tab.id
                      ? "0 8px 25px rgba(0,0,0,0.2)"
                      : "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  transform: activeTab === tab.id ? "translateY(-2px)" : "none",
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== tab.id) {
                    e.target.style.background = "rgba(255,255,255,0.3)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== tab.id) {
                    e.target.style.background = "rgba(255,255,255,0.2)";
                  }
                }}
              >
                <Icon size={20} />
                {tab.name}
              </button>
            );
          })}
        </div>

        {/* 内容区域 */}
        <div
          style={{
            background: "white",
            borderRadius: "20px",
            padding: "40px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            minHeight: "600px",
          }}
        >
          {/* 系统架构图 */}
          {activeTab === "system" && (
            <div>
              <h2
                style={{
                  fontSize: "32px",
                  fontWeight: "700",
                  marginBottom: "30px",
                  color: "#2d3748",
                }}
              >
                分层系统架构
              </h2>

              {Object.entries(systemArchitecture).map(([key, layer], index) => (
                <div
                  key={key}
                  style={{
                    marginBottom: "30px",
                    border: layer.isCore
                      ? `5px solid ${layer.color}`
                      : `3px solid ${layer.color}`,
                    borderRadius: "15px",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    opacity: layer.disabled ? 0.5 : 1,
                    boxShadow: layer.isCore
                      ? "0 10px 40px rgba(102, 126, 234, 0.3)"
                      : "none",
                  }}
                >
                  <div
                    onClick={() => !layer.disabled && toggleSection(key)}
                    style={{
                      background: layer.isCore
                        ? `linear-gradient(135deg, ${layer.color} 0%, #764ba2 100%)`
                        : layer.color,
                      padding: layer.isCore ? "25px" : "20px",
                      cursor: layer.disabled ? "not-allowed" : "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      color: "white",
                      fontWeight: "700",
                      fontSize: layer.isCore ? "24px" : "20px",
                    }}
                  >
                    <span>
                      {index + 1}. {layer.title}
                    </span>
                    {!layer.disabled &&
                      (expandedSections[key] ? (
                        <ChevronDown />
                      ) : (
                        <ChevronRight />
                      ))}
                  </div>

                  {expandedSections[key] && !layer.disabled && (
                    <div style={{ padding: "25px", background: "#f7fafc" }}>
                      {layer.domains ? (
                        // 业务层展示域服务
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns:
                              "repeat(auto-fit, minmax(320px, 1fr))",
                            gap: "20px",
                          }}
                        >
                          {layer.domains.map((domain, idx) => {
                            const Icon = domain.icon;
                            return (
                              <div
                                key={idx}
                                style={{
                                  background: "white",
                                  padding: "20px",
                                  borderRadius: "12px",
                                  border: "3px solid #e2e8f0",
                                  transition: "all 0.3s ease",
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.transform =
                                    "translateY(-5px)";
                                  e.currentTarget.style.boxShadow =
                                    "0 10px 25px rgba(102, 126, 234, 0.2)";
                                  e.currentTarget.style.borderColor =
                                    layer.color;
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.transform =
                                    "translateY(0)";
                                  e.currentTarget.style.boxShadow = "none";
                                  e.currentTarget.style.borderColor = "#e2e8f0";
                                }}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    marginBottom: "15px",
                                    color: layer.color,
                                    fontWeight: "700",
                                    fontSize: "18px",
                                  }}
                                >
                                  <Icon size={24} />
                                  {domain.name}
                                </div>
                                <ul
                                  style={{
                                    listStyle: "none",
                                    padding: 0,
                                    margin: 0,
                                  }}
                                >
                                  {domain.services.map((service, sIdx) => (
                                    <li
                                      key={sIdx}
                                      style={{
                                        padding: "8px 0",
                                        borderBottom:
                                          sIdx < domain.services.length - 1
                                            ? "1px solid #e2e8f0"
                                            : "none",
                                        fontSize: "14px",
                                        color: "#4a5568",
                                      }}
                                    >
                                      • {service}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        // 其他层展示项目列表
                        <ul
                          style={{
                            listStyle: "none",
                            padding: 0,
                            margin: 0,
                            display: "grid",
                            gridTemplateColumns:
                              "repeat(auto-fit, minmax(300px, 1fr))",
                            gap: "15px",
                          }}
                        >
                          {layer.items.map((item, idx) => (
                            <li
                              key={idx}
                              style={{
                                background: "white",
                                padding: "15px 20px",
                                borderRadius: "10px",
                                border: "2px solid #e2e8f0",
                                fontSize: "15px",
                                color: "#2d3748",
                                fontWeight: "500",
                                transition: "all 0.2s ease",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = layer.color;
                                e.currentTarget.style.transform =
                                  "translateX(5px)";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = "#e2e8f0";
                                e.currentTarget.style.transform =
                                  "translateX(0)";
                              }}
                            >
                              {typeof item === "string" ? (
                                item
                              ) : (
                                <>
                                  <div
                                    style={{
                                      fontWeight: "700",
                                      marginBottom: "5px",
                                    }}
                                  >
                                    {item.name}
                                  </div>
                                  <div
                                    style={{
                                      fontSize: "13px",
                                      color: "#718096",
                                    }}
                                  >
                                    {item.desc}
                                  </div>
                                </>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* 业务流程图 */}
          {activeTab === "flow" && (
            <div>
              <h2
                style={{
                  fontSize: "32px",
                  fontWeight: "700",
                  marginBottom: "30px",
                  color: "#2d3748",
                }}
              >
                核心业务流程
              </h2>

              {businessFlows.map((flow, flowIdx) => (
                <div
                  key={flowIdx}
                  style={{
                    marginBottom: "50px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "24px",
                      fontWeight: "600",
                      marginBottom: "25px",
                      color: "#4a5568",
                      borderLeft: "5px solid #667eea",
                      paddingLeft: "15px",
                    }}
                  >
                    {flow.name}
                  </h3>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "stretch",
                      gap: "0",
                      overflowX: "auto",
                      paddingBottom: "20px",
                      paddingTop: "20px",
                    }}
                  >
                    {flow.steps.map((step, stepIdx) => (
                      <React.Fragment key={stepIdx}>
                        <div
                          style={{
                            minWidth: "240px",
                            minHeight: "180px",
                            background: step.color,
                            padding: "30px 20px",
                            borderRadius: "12px",
                            color: "white",
                            position: "relative",
                            transition: "all 0.3s ease",
                            display: "flex",
                            flexDirection: "column",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.05)";
                            e.currentTarget.style.zIndex = "10";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.zIndex = "1";
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              top: "-12px",
                              left: "50%",
                              transform: "translateX(-50%)",
                              background: "white",
                              color: step.color,
                              padding: "5px 15px",
                              borderRadius: "20px",
                              fontSize: "12px",
                              fontWeight: "700",
                              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                              whiteSpace: "nowrap",
                            }}
                          >
                            步骤 {stepIdx + 1}
                          </div>

                          <div
                            style={{
                              fontWeight: "700",
                              fontSize: "16px",
                              marginBottom: "12px",
                              marginTop: "10px",
                            }}
                          >
                            {step.role}
                          </div>

                          <div
                            style={{
                              fontSize: "14px",
                              lineHeight: "1.5",
                              marginBottom: step.note ? "12px" : "0",
                              flex: 1,
                            }}
                          >
                            {step.action}
                          </div>

                          {step.note && (
                            <div
                              style={{
                                fontSize: "12px",
                                opacity: 0.95,
                                fontStyle: "italic",
                                borderTop: "1px solid rgba(255,255,255,0.3)",
                                paddingTop: "10px",
                                marginTop: "auto",
                                lineHeight: "1.4",
                              }}
                            >
                              💡 {step.note}
                            </div>
                          )}
                        </div>

                        {stepIdx < flow.steps.length - 1 && (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              padding: "0 15px",
                              fontSize: "28px",
                              color: "#cbd5e0",
                              fontWeight: "700",
                            }}
                          >
                            →
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}

              {/* 流程说明 */}
              <div
                style={{
                  marginTop: "40px",
                  padding: "25px",
                  background:
                    "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                  borderRadius: "15px",
                  color: "white",
                }}
              >
                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: "700",
                    marginBottom: "15px",
                  }}
                >
                  流程关键点说明
                </h3>
                <ul
                  style={{
                    lineHeight: "1.8",
                    fontSize: "15px",
                    paddingLeft: "20px",
                  }}
                >
                  <li>
                    <strong>B端自定义审核流:</strong>{" "}
                    B端管理员可自行配置A→B→C或A→B等多级审核
                  </li>
                  <li>
                    <strong>规则引擎校验:</strong>{" "}
                    根据国家配置决定不符要求者能否投递
                  </li>
                  <li>
                    <strong>策略模式结算:</strong>{" "}
                    规则引擎识别结算模式,调用不同策略(平台结算 vs 自行结算)
                  </li>
                  <li>
                    <strong>平台结算模式:</strong>{" "}
                    B端按固定价格与平台结算,平台与用户结算，平台赚取差价
                  </li>
                  <li>
                    <strong>自行结算模式:</strong>{" "}
                    B端设置薪资,平台抽取信息服务费
                  </li>
                  <li>
                    <strong>人工转账标记:</strong>{" "}
                    提现审核通过后需财务人员手动标记已转账
                  </li>
                  <li>
                    <strong>手动录入功能:</strong>{" "}
                    支持平台方为无智能手机用户录入并应聘
                  </li>
                  <li>
                    <strong>信用评价体系:</strong> B端评价+出勤统计
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* 多租户配置架构 */}
          {activeTab === "tenant" && (
            <div>
              <h2
                style={{
                  fontSize: "32px",
                  fontWeight: "700",
                  marginBottom: "30px",
                  color: "#2d3748",
                }}
              >
                多租户应用配置架构
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "25px",
                }}
              >
                {tenantConfig.layers.map((layer, idx) => (
                  <div
                    key={idx}
                    style={{
                      border: layer.disabled
                        ? "3px dashed #cbd5e0"
                        : "3px solid #e2e8f0",
                      borderRadius: "15px",
                      overflow: "hidden",
                      transition: "all 0.3s ease",
                      opacity: layer.disabled ? 0.6 : 1,
                    }}
                    onMouseEnter={(e) => {
                      if (!layer.disabled) {
                        e.currentTarget.style.borderColor = "#667eea";
                        e.currentTarget.style.boxShadow =
                          "0 10px 30px rgba(102, 126, 234, 0.2)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!layer.disabled) {
                        e.currentTarget.style.borderColor = "#e2e8f0";
                        e.currentTarget.style.boxShadow = "none";
                      }
                    }}
                  >
                    <div
                      style={{
                        background: layer.disabled
                          ? "linear-gradient(135deg, #cbd5e0, #a0aec0)"
                          : `linear-gradient(135deg, ${
                              idx === 0
                                ? "#667eea, #764ba2"
                                : idx === 1
                                ? "#f093fb, #f5576c"
                                : idx === 2
                                ? "#4facfe, #00f2fe"
                                : "#43e97b, #38f9d7"
                            })`,
                        padding: "20px 25px",
                        color: "white",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "22px",
                          fontWeight: "700",
                          marginBottom: "8px",
                        }}
                      >
                        第 {idx + 1} 层: {layer.name}
                      </div>
                      <div
                        style={{
                          fontSize: "14px",
                          opacity: 0.95,
                        }}
                      >
                        {layer.desc}
                      </div>
                    </div>

                    <div
                      style={{
                        padding: "25px",
                        background: layer.disabled ? "#f7fafc" : "#f7fafc",
                      }}
                    >
                      <ul
                        style={{
                          listStyle: "none",
                          padding: 0,
                          margin: 0,
                          display: "grid",
                          gridTemplateColumns:
                            "repeat(auto-fit, minmax(250px, 1fr))",
                          gap: "15px",
                        }}
                      >
                        {layer.items.map((item, itemIdx) => (
                          <li
                            key={itemIdx}
                            style={{
                              background: "white",
                              padding: "15px 20px",
                              borderRadius: "10px",
                              border: layer.disabled
                                ? "2px dashed #cbd5e0"
                                : "2px solid #e2e8f0",
                              fontSize: "14px",
                              color: layer.disabled ? "#a0aec0" : "#2d3748",
                              fontWeight: "500",
                              transition: "all 0.2s ease",
                              display: "flex",
                              alignItems: "center",
                              gap: "10px",
                            }}
                            onMouseEnter={(e) => {
                              if (!layer.disabled) {
                                e.currentTarget.style.transform =
                                  "translateX(8px)";
                                e.currentTarget.style.borderColor = "#667eea";
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (!layer.disabled) {
                                e.currentTarget.style.transform =
                                  "translateX(0)";
                                e.currentTarget.style.borderColor = "#e2e8f0";
                              }
                            }}
                          >
                            <span
                              style={{
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                                background: layer.disabled
                                  ? "#cbd5e0"
                                  : "#667eea",
                                flexShrink: 0,
                              }}
                            ></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {/* 配置示例 - 标记为暂不考虑 */}
              <div
                style={{
                  marginTop: "40px",
                  padding: "30px",
                  background:
                    "linear-gradient(135deg, #cbd5e0 0%, #a0aec0 100%)",
                  borderRadius: "15px",
                  color: "white",
                  border: "3px dashed #a0aec0",
                  opacity: 0.7,
                }}
              >
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    marginBottom: "15px",
                  }}
                >
                  应用包配置示例 - 暂不考虑
                </h3>
                <p style={{ fontSize: "15px", marginBottom: "0" }}>
                  后续阶段将根据实际业务需求,组合基础功能和规则配置,打包成不同的行业应用。
                </p>
              </div>

              {/* 技术实现 */}
              <div
                style={{
                  marginTop: "40px",
                  padding: "25px",
                  background:
                    "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                  borderRadius: "15px",
                  color: "white",
                }}
              >
                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: "700",
                    marginBottom: "15px",
                  }}
                >
                  技术实现方案
                </h3>
                <ul
                  style={{
                    lineHeight: "1.8",
                    fontSize: "15px",
                    paddingLeft: "20px",
                  }}
                >
                  <li>
                    <strong>策略模式:</strong>{" "}
                    不同规则通过策略模式实现,在配置中心配置选用哪个策略
                  </li>
                  <li>
                    <strong>规则引擎:</strong>{" "}
                    支持应聘资格、薪资计算、信用评分等规则的动态配置
                  </li>
                  <li>
                    <strong>数据隔离:</strong>{" "}
                    tenant_id字段隔离B端数据,C端用户表全平台共享
                  </li>
                  <li>
                    <strong>扩展性:</strong>{" "}
                    新增规则只需增加策略实现,无需修改核心代码
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlexibleEmploymentArchitecture;
