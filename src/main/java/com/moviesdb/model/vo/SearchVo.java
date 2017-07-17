package com.moviesdb.model.vo;

/**
 * Created by ashwinirajasekar on 7/2/17.
 */
public class SearchVo {

    private  String query="";
    private  int pageSize=0;
    private int pageNum=0;

    public String getQuery() {
        return query;
    }

    public void setQuery(String query) {
        this.query = query;
    }

    public int getPageSize() {
        return pageSize;
    }

    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
    }

    public int getPageNum() {
        return pageNum;
    }

    public void setPageNum(int pageNum) {
        this.pageNum = pageNum;
    }
}
