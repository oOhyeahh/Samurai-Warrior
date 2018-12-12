import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListComponent } from './list/list.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolver/member-detail.resolver';
import { MemberListResolver } from './_resolver/member-list.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolver/member-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-change.guard';

export const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'members',
        component: MemberListComponent, resolve: {users: MemberListResolver},
        canActivate: [AuthGuard]
    },
    {
        path: 'members/:id',
        component: MemberDetailComponent, resolve: {user: MemberDetailResolver},
        canActivate: [AuthGuard]
    },
    {
        path: 'member/edit',
        component: MemberEditComponent, resolve: {user: MemberEditResolver}, canDeactivate: [PreventUnsavedChanges],
        canActivate: [AuthGuard]
    },
    {
        path: 'messages',
        component: MessagesComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'lists',
        component: ListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];

