export const name="balloon-fill";
export const id="dl_5b115e103a33491e8d5e";
export const url=new URL("../icons/balloon-fill.svg?v=15137f7538d65dfffcbd0d13210567f5d54464fa4b6cb0d86622e63aee1972ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
