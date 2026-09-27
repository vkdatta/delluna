export const name="swords-fill";
export const id="dl_7248f27ca6286925c0c3";
export const url=new URL("../icons/swords-fill.svg?v=6e040e057f09076128caec6d4dfb6507acb0524da714bf96ac1fe8d54399f800",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
