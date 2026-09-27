export const name="nutrition";
export const id="dl_3da25dc0a0dcbb527dd8";
export const url=new URL("../icons/nutrition.svg?v=e76228ad3c6bb11d8af76a88c0d0d9304a89a6859102b21352ab879d7742da2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
