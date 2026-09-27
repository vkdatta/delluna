export const name="sun-horizon-bold";
export const id="dl_5c82030449f246af50b5";
export const url=new URL("../icons/sun-horizon-bold.svg?v=47698be1fb43560ab66b4573d155d2393a595eefad8af39e8190ea2a6b5550b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
