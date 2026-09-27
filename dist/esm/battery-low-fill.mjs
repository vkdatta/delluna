export const name="battery-low-fill";
export const id="dl_ba598edad158445d8217";
export const url=new URL("../icons/battery-low-fill.svg?v=0a7dd04ec8db31c49fb55cbb8a52ae7f0da58af78fea10e846231e3af3690f34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
