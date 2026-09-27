export const name="atom-fill";
export const id="dl_920bf252c6e34775ab50";
export const url=new URL("../icons/atom-fill.svg?v=fb8d76a823a80ac3ae0c6e726c4446fd6223f0eaab6053c8f735ef848939d678",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
