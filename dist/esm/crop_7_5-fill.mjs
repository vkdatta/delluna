export const name="crop_7_5-fill";
export const id="dl_39bb42a13fe4d4068706";
export const url=new URL("../icons/crop_7_5-fill.svg?v=d96445f4b20087d4bf80cf2312dada49ea84906bf1cdab5e9c022f820bc94c43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
