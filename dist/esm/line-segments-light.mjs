export const name="line-segments-light";
export const id="dl_ce1463e7f5a748b985f0";
export const url=new URL("../icons/line-segments-light.svg?v=3aec68d9a735c9ff8ba58cfd0a028f1114d0ab3113ab87d6466e548ea7f80b66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
