export const name="flame-fill";
export const id="dl_f32627eb9dc144d3b1e4";
export const url=new URL("../icons/flame-fill.svg?v=d667dd9fe448b9a7537a3daed275507692d0e5d588490003c8b5bc91d6f45aea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
