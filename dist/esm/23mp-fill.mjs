export const name="23mp-fill";
export const id="dl_055a5a20dfa44b218f4a";
export const url=new URL("../icons/2/23mp-fill.svg?v=c83d47d62c537f10f28b52651f9123532d1a46af49fc46135a11691f9df05802",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
