export const name="vape_free-fill";
export const id="dl_e0948cb517dfb1e291e5";
export const url=new URL("../icons/vape_free-fill.svg?v=251203cd33931284df86eedc0dcb766a5fb3584a25d2769b8cad72eb381e61ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
