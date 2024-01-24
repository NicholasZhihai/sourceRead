package com.source.read;

import java.util.ArrayList;
import java.util.List;

/**
 * @author lizhihai
 * @date 2024/1/24
 * @description
 */
public class Test {
    public static void main(String[] args) {
        List<Long> newOrderedGroupIds = new ArrayList<>();
        newOrderedGroupIds.add(1L);
        newOrderedGroupIds.add(2L);
        newOrderedGroupIds.add(3L);
        newOrderedGroupIds.add(4L);
        newOrderedGroupIds.add(newOrderedGroupIds.indexOf(4L) + 1, 8L);
        System.out.println(newOrderedGroupIds);
    }
}
