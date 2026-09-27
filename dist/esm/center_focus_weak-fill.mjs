export const name="center_focus_weak-fill";
export const id="dl_b65bedb416168e3ff952";
export const url=new URL("../icons/center_focus_weak-fill.svg?v=09bcef0f73a40fafe747b91337e5c6db7c36302a1827e5d89f4dd2b14d5995ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
