export const name="alarm_add";
export const id="dl_c457c2d48d6c379ac627";
export const url=new URL("../icons/alarm_add.svg?v=47aed0bf9b35092f7db377db7a708b10ae33fa416ab30b4b712cad30d604319d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
