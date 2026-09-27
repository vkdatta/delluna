export const name="star-plus";
export const id="dl_d21bef4e51264bd99d8f";
export const url=new URL("../icons/star-plus.svg?v=39ee89a278cab8cb0880de05482dcb3dd4d9a3dbf57017e23e08a6445eacdde7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
