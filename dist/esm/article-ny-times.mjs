export const name="article-ny-times";
export const id="dl_ac5b227d0b154ad6b2fa";
export const url=new URL("../icons/article-ny-times.svg?v=37240bb36ec56ebac03b78b19df0fc694626edcb288504e2420019d77b2f6e7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
