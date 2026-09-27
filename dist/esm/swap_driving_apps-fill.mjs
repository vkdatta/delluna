export const name="swap_driving_apps-fill";
export const id="dl_be484453aa771e4dcdd6";
export const url=new URL("../icons/swap_driving_apps-fill.svg?v=8fd5fbc7f54a1334b93ed09198d9d9079f3c9743c0a09102d96b2f08f08e5ca6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
