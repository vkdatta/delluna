export const name="fan_focus-fill";
export const id="dl_3ac7fd56df854a1fa4f7";
export const url=new URL("../icons/fan_focus-fill.svg?v=5bb3d4856c5e0dc8996ab3cc2a95372ebff14fdfe8a5f0e333b7e71454e3abc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
