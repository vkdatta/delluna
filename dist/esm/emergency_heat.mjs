export const name="emergency_heat";
export const id="dl_dcb2587a02a24c40803f";
export const url=new URL("../icons/E/emergency_heat.svg?v=c5f460b41ecf09d398bac6097e4f1577c2071e3e6eb296126a2c46aa11852463",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
