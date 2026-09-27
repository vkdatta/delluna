export const name="battery_status_good";
export const id="dl_b70416161c0da83da5b1";
export const url=new URL("../icons/battery_status_good.svg?v=4062d133669805d0c7b192a92d70b1f99696c5fe4f893cba3e63c41ac0e6144a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
