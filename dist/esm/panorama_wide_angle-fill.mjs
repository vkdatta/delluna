export const name="panorama_wide_angle-fill";
export const id="dl_50aa21f20b0f7a6cd631";
export const url=new URL("../icons/panorama_wide_angle-fill.svg?v=1e826e4f520cd947c4cf19ebba24e21cb8baf80b9136d6f3b7a2f50d1e92666f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
