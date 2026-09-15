export const name="font_download_off-fill";
export const id="dl_580b172852ff43179bb2";
export const url=new URL("../icons/F/font_download_off-fill.svg?v=ffedba55085103b0f00c29e6a269de51490ab0a3483bc1f336739896c7ce7c64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
