export const name="router_off-fill";
export const id="dl_ac70c7c5e54e49bfbe54";
export const url=new URL("../icons/router_off-fill.svg?v=d2315c9489b69fb282f8adba6f5db495ca45e52f1c8cdf566d96f49a261986e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
