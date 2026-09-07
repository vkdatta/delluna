export const name="less-than-fill";
export const id="dl_8af032ebf6f84892ad21";
export const url=new URL("../icons/less-than-fill.svg?v=161fe913b4a8f88d1e9418aaa134cc8cfcd9268f0e815c7852562a4e47771280",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
