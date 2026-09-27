export const name="battery-charging-vertical-fill";
export const id="dl_f2de4d0314e848b4b304";
export const url=new URL("../icons/battery-charging-vertical-fill.svg?v=6f1023eebdc28f253250e5c70c717b6250f0d53430380f4f74cb59a959e9b74d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
