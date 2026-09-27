export const name="1x_mobiledata_badge-fill";
export const id="dl_f9fb85dcdb045dc0fdae";
export const url=new URL("../icons/1x_mobiledata_badge-fill.svg?v=a4c5c1d737dd7a4db30f7db462eeb940d63028390bbc55b86b4ded1c99ec613d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
