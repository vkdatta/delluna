export const name="mastodon-logo-thin";
export const id="dl_8615de185b5b412d83ab";
export const url=new URL("../../icons/M/mastodon-logo-thin.svg?v=240609bb5dcd7ebd294be28530d8a5cff4bd29810ac2acdbf140b6749810db2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
