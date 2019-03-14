'use strict';
import * as vscode from 'vscode';
import { API } from '../typings/api';
import { LiveShareGitProvider } from './vsls';

export function activate(context: vscode.ExtensionContext) {
    const ghpr = vscode.extensions.getExtension('GitHub.vscode-pull-request-github')!.exports;
    registerLiveShareGitProvider(ghpr);
}

export function registerLiveShareGitProvider(apiImpl: API): vscode.Disposable {
	let liveShareGitProvider = new LiveShareGitProvider(apiImpl);
	return liveShareGitProvider;
}

// this method is called when your extension is deactivated
export function deactivate() {
}