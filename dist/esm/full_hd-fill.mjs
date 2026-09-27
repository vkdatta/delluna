export const name="full_hd-fill";
export const id="dl_1c1ac644c0696b1ca601";
export const url=new URL("../icons/full_hd-fill.svg?v=0298fbc0e0896935ed775bb0c29ef5ca00a44bae4e390d6b91d2c1f4fb2274f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
