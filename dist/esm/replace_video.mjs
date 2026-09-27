export const name="replace_video";
export const id="dl_2fdf06244cfb8c07aada";
export const url=new URL("../icons/replace_video.svg?v=0ebe1db875ad50246d8ec47cfbedeb45234b2ada76cdb2e5f23492faf5c0353c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
