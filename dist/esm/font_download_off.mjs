export const name="font_download_off";
export const id="dl_3a0dfb572c2722975641";
export const url=new URL("../icons/font_download_off.svg?v=e3d63d234f1d01478d306b3464cadb485a1df27b50e0eb103133656cc5a2956b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
