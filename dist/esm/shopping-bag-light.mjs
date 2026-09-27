export const name="shopping-bag-light";
export const id="dl_558154f7e4bd6b954a90";
export const url=new URL("../icons/shopping-bag-light.svg?v=9e33178050ab1aae8e5579df66940e5a6c2559f5ee2fce86fcb9a90b5e617f47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
