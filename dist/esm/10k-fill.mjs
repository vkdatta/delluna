export const name="10k-fill";
export const id="dl_52f3725398c686132a31";
export const url=new URL("../icons/10k-fill.svg?v=90d55c0edb66848b55d3324a6fdd1d4d0ab055a3e92fc971480c4996bc2f8333",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
