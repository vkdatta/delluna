export const name="shield_lock-fill";
export const id="dl_91d64ef0d35e9e148e81";
export const url=new URL("../icons/shield_lock-fill.svg?v=a4e2aa7d719c24d67522bae25728fd6b8819529f0dda0be4f824472dea896745",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
