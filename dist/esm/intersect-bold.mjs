export const name="intersect-bold";
export const id="dl_5f6c6cb2b67141bbba05";
export const url=new URL("../icons/intersect-bold.svg?v=a71bdf14285163e5bc256dc6fed91d0f05772ae92fe6740cd961e42b6860a528",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
