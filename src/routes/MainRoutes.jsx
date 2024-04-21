import { Routes, Route } from 'react-router-dom';
import { Layouts } from '../layouts';
import  { Views } from '../views';

export function MainRoutes() {
    return (
        <Layouts.MainLayout>
            <Routes>
                <Route path='' element={<Views.DashboardView />}/>
                <Route path='permissions' element={<Views.PermissionListView />}/>
                <Route path='permissions/create' element={<Views.PermissionCreateView />}/>
                <Route path='permissions/:id/edit' element={<Views.PermissionEditView />}/>
                <Route path='roles' element={<Views.RoleListView />}/>
                <Route path='roles/create' element={<Views.RoleCreateView />}/>
                <Route path='roles/:id/edit' element={<Views.RoleEditView />}/>
                <Route path='admins' element={<Views.AdminListView />}/>
                <Route path='admins/create' element={<Views.AdminCreateView />}/>
                <Route path='admins/:id/edit' element={<Views.AdminEditView />}/>
                <Route path='users' element={<Views.UserListView />}/>
                <Route path='users/create' element={<Views.UserCreateView />}/>
                <Route path='users/:id/edit' element={<Views.UserEditView />}/>
                <Route path='categories' element={<Views.CategoryListView />}/>
                <Route path='categories/create' element={<Views.CategoryCreateView />}/>
                <Route path='categories/:id/edit' element={<Views.CategoryEditView />}/>
                <Route path='regions' element={<Views.RegionListView />}/>
                <Route path='regions/create' element={<Views.RegionCreateView />}/>
                <Route path='regions/:id/edit' element={<Views.RegionEditView />}/>
                <Route path='cities' element={<Views.CityListView />}/>
                <Route path='cities/create' element={<Views.CityCreateView />}/>
                <Route path='cities/:id/edit' element={<Views.CityEditView />}/>
                <Route path='municipalities' element={<Views.MunicipalityListView />}/>
                <Route path='municipalities/create' element={<Views.MunicipalityCreateView />}/>
                <Route path='municipalities/:id/edit' element={<Views.MunicipalityEditView />}/>
                <Route path='features' element={<Views.FeatureListView />}/>
                <Route path='features/create' element={<Views.FeatureCreateView />}/>
                <Route path='features/:id/edit' element={<Views.FeatureEditView />}/>
                <Route path='products' element={<Views.ProductListView />}/>
                <Route path='products/create' element={<Views.ProductCreateView />}/>
                <Route path='products/:id/edit' element={<Views.ProductEditView />}/>
                <Route path='feature-products' element={<Views.FeatureProductListView />}/>
                <Route path='feature-products/create' element={<Views.FeatureProductCreateView />}/>
                <Route path='feature-products/:id/edit' element={<Views.FeatureProductEditView />}/>
                <Route path='comments' element={<Views.CommentListView />}/>
                <Route path='comments/create' element={<Views.CommentCreateView />}/>
                <Route path='comments/:id/edit' element={<Views.CommentEditView />}/>
                <Route path='favorites' element={<Views.FavoriteListView />}/>
                <Route path='favorites/create' element={<Views.FavoriteCreateView />}/>
                <Route path='favorites/:id/edit' element={<Views.FavoriteEditView />}/>
            </Routes>
        </Layouts.MainLayout>
    )
}