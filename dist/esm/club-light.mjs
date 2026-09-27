export const name="club-light";
export const id="dl_b638933abf3e4fed9b73";
export const url=new URL("../icons/club-light.svg?v=ea281476f73cb345b5e308d9896d891b6be47f1f446a86f1e1b4004350443d1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
