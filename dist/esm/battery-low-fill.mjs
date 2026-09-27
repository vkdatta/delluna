export const name="battery-low-fill";
export const id="dl_ba598edad158445d8217";
export const url=new URL("../icons/battery-low-fill.svg?v=55a0bc67aa041fafcca3b163c755dae0f0463d86baf1be837d8ae150aba25161",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
