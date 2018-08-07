import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export class ConnectedUserData {
    public UserName: String = "";
    public ConnectionStatus: boolean;
}

export class GroupByData {
    public GroupBy: any[] = []
}
export class OrderByData {
    public OrderBy: any[] = []
}
export class GroupByOrderBy {
    public FreeZedDataFields: any[] = [];
}

export class RowBreakData {
    public rows:{};
}


@Injectable()
export class GlobalService {

    //For SignalR Connection Status
    ConnectedUserData: Subject<ConnectedUserData> = new Subject();
    get ConnectedUser(): Subject<ConnectedUserData> {
        return this.ConnectedUserData;
    }
    set ConnectedUser(src: Subject<ConnectedUserData>) {
        this.ConnectedUserData = src;
    }
    //For GroupBy Collectuion 
    GroupByOrderBy: Subject<GroupByOrderBy> = new Subject();
    get GroupByOrderByData(): Subject<GroupByOrderBy> {
        return this.GroupByOrderBy;
    }
    set GroupByOrderByData(src: Subject<GroupByOrderBy>) {
        this.GroupByOrderBy = src;
    }
    //For Row Breaking  Collectuion 
    RowBreakData: Subject<RowBreakData> = new Subject();
    get RowBreaking(): Subject<RowBreakData> {
        return this.RowBreakData;
    }
    set RowBreaking(src: Subject<RowBreakData>) {
        this.RowBreakData = src;
    }
    // For GroupBy Data only
    GroupByData: Subject<GroupByData> = new Subject();
    get GroupBy(): Subject<GroupByData> {
        return this.GroupByData;
    }
    set GroupBy(src: Subject<GroupByData>) {
        this.GroupByData = src;
    }
    // For OrderBy Data only
    OrderByData: Subject<OrderByData> = new Subject();
    get OrderBy(): Subject<OrderByData> {
        return this.OrderByData;
    }
    set OrderBy(src: Subject<OrderByData>) {
        this.OrderByData = src;
    }

    constructor() { }
    // Methods For Live data transfer 
    ChangeUserStatus(user: ConnectedUserData) {
        this.ConnectedUser.next(user);
    }

    UpdateGroupByData(groupOrderby: GroupByOrderBy) {
        this.GroupByOrderByData.next(groupOrderby);
    }

    UpdateRowBreakingData(rows: RowBreakData) {
        this.RowBreaking.next(rows);
    }

    UpdateGroupBy(gropby:GroupByData){
        this.GroupBy.next(gropby);
    }
    UpdateOrderBy(orderby:OrderByData){
        this.OrderBy.next(orderby);
    }

}
