export const name="taunt-fill";
export const id="dl_f660dfe5580541787690";
export const url=new URL("../icons/taunt-fill.svg?v=549183beb1a691475e602de75a1a75150a315c5c93b6138753be974a9bd4ec6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
