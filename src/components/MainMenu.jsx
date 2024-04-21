import { NavLink } from "react-router-dom";

export function MainMenu() {
    return (
        <div className="vertical-menu">
            <div data-simplebar className="h-100">
                <div id="sidebar-menu">
                    <ul className="metismenu list-unstyled" id="side-menu">
                        <li className="menu-title">Menu</li>
                        <li>
                            <NavLink exact="true" to="/">
                                <i className="mdi mdi-view-dashboard"></i>
                                <span>Tableau de bord</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact="true" to="/users">
                                <i className="mdi mdi-view-dashboard"></i>
                                <span>Utilisateurs</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact="true" to="/products">
                                <i className="mdi mdi-view-dashboard"></i>
                                <span>Publications</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact="true" to="/categories">
                                <i className="mdi mdi-view-dashboard"></i>
                                <span>Categories</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact="true" to="/features">
                                <i className="mdi mdi-view-dashboard"></i>
                                <span>Charactéristique</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact="true" to="/regions">
                                <i className="mdi mdi-view-dashboard"></i>
                                <span>Regions</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact="true" to="/cities">
                                <i className="mdi mdi-view-dashboard"></i>
                                <span>Villes</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact="true" to="/municipalities">
                                <i className="mdi mdi-view-dashboard"></i>
                                <span>Quartiers</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact="true" to="/permissions">
                                <i className="mdi mdi-view-dashboard"></i>
                                <span>Permissions</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact="true" to="/roles">
                                <i className="mdi mdi-view-dashboard"></i>
                                <span>Roles</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact="true" to="/admins">
                                <i className="mdi mdi-view-dashboard"></i>
                                <span>Admins</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}