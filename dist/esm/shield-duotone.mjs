export const name="shield-duotone";
export const id="dl_44fc7b26921e64a81956";
export const url=new URL("../icons/shield-duotone.svg?v=9dfbc82a15b2d97a8b22108c9a0afeee014a6903e7be060f17f600955014133f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
