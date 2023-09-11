import { describe, expect, run, test } from "../../testing/main";
import { TreeNode } from "../Tree";
import { treeLevel } from "./countTreeLevels";


describe('treeLevel Tests', () => {
    test('Empty Tree', () => {
        const root = null;
        const result = treeLevel(root);
        expect(result).toBe(0);
    });

    test('Single Node Tree', () => {
        const root = new TreeNode<number | null>(5);
        const result = treeLevel(root);
        expect(result).toBe(1);
    });
    test('Balanced Tree', () => {
        const root = new TreeNode<number | null>(1);
        root.left = new TreeNode<number | null>(2);
        root.right = new TreeNode<number | null>(3);
        const result = treeLevel(root);
        expect(result).toBe(2);
    });

    test('Unbalanced Tree', () => {
        const root = new TreeNode<number | null>(1);
        root.left = new TreeNode<number | null>(2);
        root.left.left = new TreeNode<number | null>(3);
        const result = treeLevel(root);
        expect(result).toBe(3);
    });
});

// Run the tests
run();