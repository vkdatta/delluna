export const name="id_card";
export const id="dl_9cf7756e7e610f39bac6";
export const url=new URL("../icons/id_card.svg?v=c3dffa4d2eb2d1eca82197b143bcb9aa5afdc30514f700f6ee2f116bc8cd4076",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
