import { NavLink } from "react-router-dom";
import * as Icons from 'react-feather';
export function MainMenu() {
    return (
        <div className="vertical-menu">
            <div data-simplebar className="h-100">
                <div id="sidebar-menu">
                    <ul className="metismenu list-unstyled" id="side-menu">
                        <li className="menu-title">Menu</li>
                        <li>
                            <NavLink exact="true" to="/">
                                <Icons.Grid size={18} className="mr-2"/>
                                <span>Tableau de bord</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact="true" to="/users">
                                <Icons.Users size={18} className="mr-2"/>
                                <span>Utilisateurs</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact="true" to="/products">
                                <Icons.Home size={18} className="mr-2"/>
                                <span>Publications</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact="true" to="/features">
                                <Icons.List size={18} className="mr-2"/>
                                <span>Charactéristiques</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact="true" to="/categories">
                                <Icons.Copy size={18} className="mr-2"/>
                                <span>Categories</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact="true" to="/regions">
                                <Icons.Flag size={18} className="mr-2"/>
                                <span>Regions</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact="true" to="/cities">
                                <Icons.Map size={18} className="mr-2"/>
                                <span>Villes</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact="true" to="/municipalities">
                                <Icons.MapPin size={18} className="mr-2"/>
                                <span>Quartiers</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact="true" to="/permissions">
                                <Icons.Settings size={18} className="mr-2"/>
                                <span>Permissions</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact="true" to="/roles">
                                <Icons.Shield size={18} className="mr-2"/>
                                <span>Roles</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact="true" to="/admins">
                                <Icons.UserPlus size={18} className="mr-2"/>
                                <span>Admins</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}