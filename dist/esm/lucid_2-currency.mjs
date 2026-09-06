export const name="lucid_2-currency";
export const id="dl_4d049a85922745c0b611";
export const url=new URL("../icons/lucid_2-currency.svg?v=6b9ceff9000d83113304a4db8b69c2c9a722bb7a7a150d742209b9efc3d68d44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
