export const name="nest_wifi_router-fill";
export const id="dl_c1ae71db2bee543e0557";
export const url=new URL("../icons/nest_wifi_router-fill.svg?v=2ee1115971a032cb31414e3a3817a172ad8d5b18faccb2a1fbece6ea20b9de08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
