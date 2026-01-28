import DesktopIcon from "./DesktopIcon";
import desktopIcon from "../assets/images/desktop.png";
import boyIcon from "../assets/images/AM.png";
import gamesIcon from "../assets/images/game.png";
import fileIcon from "../assets/images/file.png";
import suitcaseIcon from "../assets/images/suitcase.png";
import recycleBinIcon from "../assets/images/recycle-bin.png";
import settingIcon from "../assets/images/setting.png";
import terminalIcon from "../assets/images/terminal.png";
import outlookIcon from "../assets/images/outlook.png";
import playerIcon from "../assets/images/player.png";
import chatIcon from "../assets/images/Chat.png";
import OutlookMail from "./OutlookMail";
import MusicPlayer from "./MusicPlayer";
import OracleChat from "./OracleChat";
import Profile from "./Profile";
import Resume from "./Resume";
// React Icons imports
import {
  FaBriefcase,
  FaChartLine,
  FaCloud,
  FaCode,
  FaDesktop,
  FaHdd,
  FaLightbulb,
  FaMemory,
  FaNetworkWired,
  FaNodeJs,
  FaPalette,
  FaReact,
  FaTools,
} from "react-icons/fa";
import {
  MdDesignServices,
  MdSettings,
  MdStorage,
  MdComputer,
} from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { BsCpu } from "react-icons/bs";

// Game components
import GameCenter from "./GameCenter";
// Recycle Bin component
import RecycleBinContent from "./RecycleBinContent";
// Works Content component
import WorksContent from "./WorksContent";
// Terminal component
import Terminal from "./Terminal";
// Project data
// Wallpaper data
import { wallpapers } from "../data/wallpapers";

const Desktop = ({ onOpenWindow, onChangeWallpaper, currentTheme, volume }) => {
  const desktopIcons = [
    {
      id: "this-pc",
      name: "This PC",
      icon: desktopIcon,
      content: {
        title: "This PC",
        type: "system",
        icon: desktopIcon,
        content: (
          <div className="p-4 lg:p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 lg:mb-6">
              <div className="text-3xl lg:text-4xl mb-2 sm:mb-0 sm:mr-4 text-gray-400">
                <MdComputer />
              </div>
              <div>
                <h3 className="text-lg lg:text-xl font-semibold text-white">
                  Portfolio System Overview
                </h3>
                <p className="text-gray-400 text-sm lg:text-base">
                  Developer Workstation - Portfolio Edition 2026
                </p>
              </div>
            </div>

            {/* Creative System Overview */}
            <div className="mt-4 lg:mt-6 space-y-4">
              {/* System Status Dashboard */}
              <div className="bg-gradient-to-r from-gray-700 to-gray-800 bg-opacity-50 p-4 lg:p-6 rounded-lg border border-gray-600">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg lg:text-xl font-bold text-white flex items-center">
                    <AiOutlineThunderbolt className="text-2xl mr-3" />
                    System Performance
                  </h4>
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-xs lg:text-sm">Online</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="flex justify-center mb-2">
                      <div className="w-12 h-12 lg:w-14 lg:h-14 bg-blue-500 rounded-xl flex items-center justify-center">
                        <BsCpu className="text-white text-2xl lg:text-3xl" />
                      </div>
                    </div>
                    <div className="text-xs lg:text-sm text-gray-300">
                      CPU Usage
                    </div>
                    <div className="text-lg lg:text-xl font-bold text-gray-200">
                      23%
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
                      <div
                        className="bg-gray-400 h-2 rounded-full"
                        style={{ width: "23%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="flex justify-center mb-2">
                      <div className="w-12 h-12 lg:w-14 lg:h-14 bg-green-500 rounded-xl flex items-center justify-center">
                        <FaMemory className="text-white text-2xl lg:text-3xl" />
                      </div>
                    </div>
                    <div className="text-xs lg:text-sm text-gray-300">
                      Memory
                    </div>
                    <div className="text-lg lg:text-xl font-bold text-gray-200">
                      67%
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
                      <div
                        className="bg-gray-400 h-2 rounded-full"
                        style={{ width: "67%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="flex justify-center mb-2">
                      <div className="w-12 h-12 lg:w-14 lg:h-14 bg-purple-500 rounded-xl flex items-center justify-center">
                        <FaHdd className="text-white text-2xl lg:text-3xl" />
                      </div>
                    </div>
                    <div className="text-xs lg:text-sm text-gray-300">
                      Storage
                    </div>
                    <div className="text-lg lg:text-xl font-bold text-gray-200">
                      45%
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
                      <div
                        className="bg-gray-400 h-2 rounded-full"
                        style={{ width: "45%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="flex justify-center mb-2">
                      <div className="w-12 h-12 lg:w-14 lg:h-14 bg-orange-500 rounded-xl flex items-center justify-center">
                        <FaNetworkWired className="text-white text-2xl lg:text-3xl" />
                      </div>
                    </div>
                    <div className="text-xs lg:text-sm text-gray-300">
                      Network
                    </div>
                    <div className="text-lg lg:text-xl font-bold text-gray-200">
                      89%
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
                      <div
                        className="bg-gray-400 h-2 rounded-full"
                        style={{ width: "89%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* System Specifications */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="bg-gray-700 bg-opacity-50 p-4 rounded-lg border border-gray-600">
                  <h5 className="font-semibold text-white mb-3 flex items-center">
                    <FaDesktop className="text-xl mr-2" />
                    Hardware Specs
                  </h5>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs lg:text-sm text-gray-300">
                        Processor
                      </span>
                      <span className="text-xs lg:text-sm text-white font-medium">
                        React.js Engine v18.2
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs lg:text-sm text-gray-300">
                        Memory
                      </span>
                      <span className="text-xs lg:text-sm text-white font-medium">
                        Unlimited Creativity
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs lg:text-sm text-gray-300">
                        Graphics
                      </span>
                      <span className="text-xs lg:text-sm text-white font-medium">
                        Tailwind CSS Powered
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs lg:text-sm text-gray-300">
                        Storage
                      </span>
                      <span className="text-xs lg:text-sm text-white font-medium">
                        Cloud Portfolio
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-700 bg-opacity-50 p-4 rounded-lg border border-gray-600">
                  <h5 className="font-semibold text-white mb-3 flex items-center">
                    <MdSettings className="text-xl mr-2" />
                    System Info
                  </h5>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs lg:text-sm text-gray-300">
                        OS Version
                      </span>
                      <span className="text-xs lg:text-sm text-white font-medium">
                        Portfolio OS 2026
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs lg:text-sm text-gray-300">
                        Build
                      </span>
                      <span className="text-xs lg:text-sm text-white font-medium">
                        22H2.1001
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs lg:text-sm text-gray-300">
                        Architecture
                      </span>
                      <span className="text-xs lg:text-sm text-white font-medium">
                        x64-based PC
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs lg:text-sm text-gray-300">
                        Last Updated
                      </span>
                      <span className="text-xs lg:text-sm text-white font-medium">
                        Today
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Portfolio Drives & Tools */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Portfolio Drives */}
                <div className="bg-gray-700 bg-opacity-50 p-4 rounded-lg border border-gray-600">
                  <h5 className="font-semibold text-white mb-4 flex items-center">
                    <MdStorage className="text-xl mr-2" />
                    Portfolio Drives
                  </h5>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-600 bg-opacity-40 rounded-lg hover:bg-opacity-60 transition-all cursor-pointer">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-500 bg-opacity-50 rounded flex items-center justify-center mr-3 border border-gray-500">
                          <FaBriefcase className="text-white text-sm" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">
                            Projects (C:)
                          </div>
                          <div className="text-xs text-gray-300">
                            15.2 GB free of 50 GB
                          </div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-300">69% full</div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-600 bg-opacity-40 rounded-lg hover:bg-opacity-60 transition-all cursor-pointer">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-500 bg-opacity-50 rounded flex items-center justify-center mr-3 border border-gray-500">
                          <FaPalette className="text-white text-sm" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">
                            Creative (D:)
                          </div>
                          <div className="text-xs text-gray-300">
                            25.8 GB free of 100 GB
                          </div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-300">74% full</div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-600 bg-opacity-40 rounded-lg hover:bg-opacity-60 transition-all cursor-pointer">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-500 bg-opacity-50 rounded flex items-center justify-center mr-3 border border-gray-500">
                          <FaCloud className="text-white text-sm" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">
                            Cloud Sync
                          </div>
                          <div className="text-xs text-gray-300">
                            Unlimited storage
                          </div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-300">Synced</div>
                    </div>
                  </div>
                </div>

                {/* Developer Tools */}
                <div className="bg-gray-700 bg-opacity-50 p-4 rounded-lg border border-gray-600">
                  <h5 className="font-semibold text-white mb-4 flex items-center">
                    <FaTools className="text-xl mr-2" />
                    Developer Tools
                  </h5>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-600 bg-opacity-50 p-3 rounded-lg text-white hover:bg-opacity-70 transition-all cursor-pointer border border-gray-500 flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FaReact className="text-white text-lg" />
                      </div>
                      <div>
                        <div className="text-xs font-medium">
                          React DevTools
                        </div>
                        <div className="text-xs opacity-80">v7.0.1</div>
                      </div>
                    </div>

                    <div className="bg-gray-600 bg-opacity-50 p-3 rounded-lg text-white hover:bg-opacity-70 transition-all cursor-pointer border border-gray-500 flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FaNodeJs className="text-white text-lg" />
                      </div>
                      <div>
                        <div className="text-xs font-medium">Node.js</div>
                        <div className="text-xs opacity-80">v22.20.0</div>
                      </div>
                    </div>

                    <div className="bg-gray-600 bg-opacity-50 p-3 rounded-lg text-white hover:bg-opacity-70 transition-all cursor-pointer border border-gray-500 flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MdDesignServices className="text-white text-lg" />
                      </div>
                      <div>
                        <div className="text-xs font-medium">Figma</div>
                        <div className="text-xs opacity-80">Design Tool</div>
                      </div>
                    </div>

                    <div className="bg-gray-600 bg-opacity-50 p-3 rounded-lg text-white hover:bg-opacity-70 transition-all cursor-pointer border border-gray-500 flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FaCode className="text-white text-lg" />
                      </div>
                      <div>
                        <div className="text-xs font-medium">VS Code</div>
                        <div className="text-xs opacity-80">Editor</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-gray-700 bg-opacity-50 p-4 rounded-lg border border-gray-600">
                <h5 className="font-semibold text-white mb-4 flex items-center">
                  <FaChartLine className="text-xl mr-2" />
                  Recent Portfolio Activity
                </h5>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-600 bg-opacity-30 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                      <div>
                        <div className="text-sm text-white">
                          Portfolio website updated
                        </div>
                        <div className="text-xs text-gray-400">2 hours ago</div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-300">Deployed</div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-600 bg-opacity-30 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                      <div>
                        <div className="text-sm text-white">
                          New project: E-commerce App
                        </div>
                        <div className="text-xs text-gray-400">1 day ago</div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-300">In Progress</div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-600 bg-opacity-30 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                      <div>
                        <div className="text-sm text-white">
                          Skills updated: TypeScript
                        </div>
                        <div className="text-xs text-gray-400">3 days ago</div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-300">Certified</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ),
      },
    },
    {
      id: "profile",
      name: "Profile",
      icon: boyIcon,
      content: {
        title: "Profile",
        type: "profile",
        icon: boyIcon,
        content: <Profile currentTheme={currentTheme} />,
      },
    },
    {
      id: "games",
      name: "Games",
      icon: gamesIcon,
      content: {
        title: "Games",
        type: "games",
        icon: gamesIcon,
        content: <GameCenter />,
      },
    },
    {
      id: "resume",
      name: "Resume",
      icon: fileIcon,
      content: {
        title: "Resume",
        type: "resume",
        icon: fileIcon,
        content: <Resume />,
      },
    },
    {
      id: "my-works",
      name: "My Projects",
      icon: suitcaseIcon,
      content: {
        title: "My Projects",
        type: "portfolio",
        icon: suitcaseIcon,
        content: <WorksContent />,
      },
    },
    {
      id: "settings",
      name: "Settings",
      icon: settingIcon,
      content: {
        title: "Settings",
        type: "settings",
        icon: settingIcon,
        content: (
          <div className="p-4 lg:p-6">
            <h3 className="text-lg lg:text-xl font-semibold mb-6 text-white">
              Personalization Settings
            </h3>
            <div className="space-y-6">
              {/* Wallpaper Customization */}
              <div className="bg-gray-700 bg-opacity-50 p-4 lg:p-6 rounded-lg border border-gray-600">
                <div className="flex items-center mb-4">
                  <h4 className="font-semibold text-base lg:text-lg text-white">
                    Wallpaper
                  </h4>
                </div>
                <p className="text-sm text-gray-300 mb-4">
                  Choose your desktop wallpaper
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {wallpapers.map((wallpaper) => (
                    <div
                      key={wallpaper.id}
                      onClick={() => onChangeWallpaper(wallpaper.id)}
                      className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                        localStorage.getItem("selectedWallpaper") ===
                          wallpaper.id ||
                        (!localStorage.getItem("selectedWallpaper") &&
                          wallpaper.id === "default")
                          ? `border-${currentTheme.id}-500 ring-2 ring-${currentTheme.id}-400 scale-105`
                          : "border-gray-500 hover:border-gray-400"
                      }`}
                      style={{
                        borderColor:
                          localStorage.getItem("selectedWallpaper") ===
                            wallpaper.id ||
                          (!localStorage.getItem("selectedWallpaper") &&
                            wallpaper.id === "default")
                            ? currentTheme.color
                            : undefined,
                      }}
                    >
                      <div className="aspect-video relative">
                        {wallpaper.type === "image" ? (
                          <img
                            src={wallpaper.image}
                            alt={wallpaper.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <div
                            className={`w-full h-full ${wallpaper.gradient}`}
                          ></div>
                        )}
                        {(localStorage.getItem("selectedWallpaper") ===
                          wallpaper.id ||
                          (!localStorage.getItem("selectedWallpaper") &&
                            wallpaper.id === "default")) && (
                          <div className="absolute top-1 right-1 bg-white rounded-full p-1">
                            <div
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: currentTheme.color }}
                            ></div>
                          </div>
                        )}
                      </div>
                      <div className="p-2 bg-gray-800 bg-opacity-50">
                        <p className="text-xs text-white text-center truncate">
                          {wallpaper.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* System Info */}
              <div className="bg-gray-700 bg-opacity-50 p-3 lg:p-4 rounded-lg border border-gray-600">
                <div className="flex items-center mb-3">
                  <MdSettings className="text-xl lg:text-2xl mr-3 text-gray-400" />
                  <h4 className="font-semibold text-sm lg:text-base text-white">
                    System Information
                  </h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-gray-600 bg-opacity-50 p-3 rounded border border-gray-500">
                    <p className="text-xs lg:text-sm font-medium text-white">
                      Version
                    </p>
                    <p className="text-xs text-gray-300">Portfolio OS v1.0</p>
                  </div>
                  <div className="bg-gray-600 bg-opacity-50 p-3 rounded border border-gray-500">
                    <p className="text-xs lg:text-sm font-medium text-white">
                      Build
                    </p>
                    <p className="text-xs text-gray-300">React 19.0.0</p>
                  </div>
                  <div className="bg-gray-600 bg-opacity-50 p-3 rounded border border-gray-500">
                    <p className="text-xs lg:text-sm font-medium text-white">
                      Last Updated
                    </p>
                    <p className="text-xs text-gray-300">Today</p>
                  </div>
                </div>
              </div>

              {/* Tips */}
              <div className="bg-gray-700 bg-opacity-30 border border-gray-600 rounded-lg p-4">
                <div className="flex items-start">
                  <FaLightbulb className="text-xl mr-3 text-gray-400" />
                  <div>
                    <h5 className="font-semibold text-white mb-2">
                      Personalization Tips
                    </h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>Your preferences are automatically saved</li>
                      <li>Try different wallpapers to match your mood</li>
                      <li>Changes apply instantly across the portfolio</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ),
      },
    },
    {
      id: "recycle-bin",
      name: "Recycle Bin",
      icon: recycleBinIcon,
      content: {
        title: "Recycle Bin",
        type: "recycle-bin",
        icon: recycleBinIcon,
        content: <RecycleBinContent />,
      },
    },
    {
      id: "terminal",
      name: "Terminal",
      icon: terminalIcon,
      content: {
        title: "Terminal",
        type: "terminal",
        icon: terminalIcon,
        content: <Terminal />,
      },
    },
    {
      id: "oracle-chat",
      name: "Oracle",
      icon: chatIcon,
      content: {
        title: "Oracle",
        type: "app",
        icon: chatIcon,
        content: <OracleChat />,
      },
    },
    {
      id: "outlook",
      name: "Outlook",
      icon: outlookIcon,
      content: {
        title: "Outlook",
        type: "app",
        icon: outlookIcon,
        content: <OutlookMail />,
      },
    },
    {
      id: "player",
      name: "Player",
      icon: playerIcon,
      content: {
        title: "Player",
        type: "app",
        icon: playerIcon,
        keepAlive: true,
        content: <MusicPlayer volume={volume} />,
      },
    },
  ];

  return (
    <div className="absolute inset-0 z-10 w-full h-full overflow-hidden">
      {/* Desktop Icons Container */}
      <div
        className="flex flex-col flex-wrap content-start items-start gap-x-2 gap-y-2 p-2 pt-4"
        style={{ height: "calc(100vh - 50px)" }}
      >
        {desktopIcons.map((icon, index) => (
          <div
            key={icon.id}
            className="w-[78px] h-[92px] sm:w-[90px] sm:h-[100px] lg:w-[100px] lg:h-[110px]"
          >
            <DesktopIcon
              icon={icon}
              onDoubleClick={() => onOpenWindow(icon.content)}
              style={{ animationDelay: `${index * 100}ms` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Desktop;
