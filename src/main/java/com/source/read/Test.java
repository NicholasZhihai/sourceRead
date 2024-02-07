package com.source.read;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

/**
 * @author lizhihai
 * @date 2024/1/24
 * @description
 */
public class Test {
    public static void main(String[] args) {
        Calendar calendar=Calendar.getInstance();
        System.out.println(new SimpleDateFormat("yyyy-MM-dd").format(calendar.getTime()));
        calendar.add(2,-1);
        System.out.println(new SimpleDateFormat("yyyy-MM-dd").format(calendar.getTime()));
    }
}
