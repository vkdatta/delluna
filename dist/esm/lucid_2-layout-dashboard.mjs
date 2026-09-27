export const name="lucid_2-layout-dashboard";
export const id="dl_49fed57dc73f48a2a7f1";
export const url=new URL("../icons/lucid_2-layout-dashboard.svg?v=f0881331ab9f604bfb55446fdf13be8ee4cdca74afd19552cd25005bed4c6ad7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
