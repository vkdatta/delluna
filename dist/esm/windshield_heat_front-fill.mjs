export const name="windshield_heat_front-fill";
export const id="dl_fba343cab06fc1f67a46";
export const url=new URL("../icons/windshield_heat_front-fill.svg?v=5a7f67625f8f41d58cec73d80703148706f8d0e4f96e4dbd33ab130ef84a8c83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
