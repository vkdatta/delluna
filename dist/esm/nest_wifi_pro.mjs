export const name="nest_wifi_pro";
export const id="dl_a75808341fc5ec041368";
export const url=new URL("../icons/nest_wifi_pro.svg?v=8d479238e6963d2d6cd30e68b2a4d90c46676424a12da9b282849e4d71559f29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
