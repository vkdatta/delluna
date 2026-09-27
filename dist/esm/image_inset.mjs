export const name="image_inset";
export const id="dl_5fc71869df4e0875c152";
export const url=new URL("../icons/image_inset.svg?v=37b5476e577c8a7ab8032ab426b1e3d273b91c3890ae9a7a2b45478fb6e72fc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
