export const name="format_align_center";
export const id="dl_e2977af388f4617660dd";
export const url=new URL("../icons/format_align_center.svg?v=abcff7f9c6ad0f207e2fdf3f94d0744f27fe0ecb5db6f7db0f6be6fe28b83fda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
