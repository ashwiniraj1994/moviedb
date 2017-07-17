package com.moviesdb.web.dao;

import com.moviesdb.exception.ApplicationException;
import com.moviesdb.model.MovieEntity;
import com.moviesdb.model.vo.SearchVo;
import org.hibernate.Criteria;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.MatchMode;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by ashwinirajasekar on 5/23/17.
 */


@Repository("movieWebDao")
public class MovieWebDao extends BaseWebDao<MovieEntity, Integer> implements MovieWebDaoIntf {


    @Override
    public MovieEntity selectMovie(Integer id) throws ApplicationException {
        MovieEntity movie = null;
        try {
            movie = (MovieEntity) getCurrentSession().get(MovieEntity.class, id);
        } catch (Exception e) {
            throw new ApplicationException("Select " + DAO_ERROR, e);
        }
        return movie;
    }

    @Override
    public List<MovieEntity> search(SearchVo searchVo) throws ApplicationException {
        Criteria criteria = getCurrentSession().createCriteria(MovieEntity.class);
        Criterion movieName = Restrictions.ilike("movieName", searchVo.getQuery(), MatchMode.ANYWHERE);
        criteria.add(movieName);

        criteria.setFirstResult((searchVo.getPageNum()) * searchVo.getPageSize());
        criteria.setMaxResults(searchVo.getPageSize());

        return criteria.list();
    }
}
