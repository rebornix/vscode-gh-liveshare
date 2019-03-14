'use strict';
import * as vscode from 'vscode';
import { API } from '../typings/api';
import { LiveShareGitManager } from './vsls';

export function activate(context: vscode.ExtensionContext) {
    const api = vscode.extensions.getExtension('GitHub.vscode-pull-request-github')!.exports;
    context.subscriptions.push(new LiveShareGitManager(api));
}

// this method is called when your extension is deactivated
export function deactivate() {
}