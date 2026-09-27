export const name="visibility_off";
export const id="dl_5b0d641c4f189b3aa7a1";
export const url=new URL("../icons/visibility_off.svg?v=28a293dd862b53205c64aeb12b52d25acfbf66b125640f473206db7426d4c760",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
