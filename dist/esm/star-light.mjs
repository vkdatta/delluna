export const name="star-light";
export const id="dl_2b5c5de54084cfd00e53";
export const url=new URL("../icons/star-light.svg?v=513d052171854cfafb91aeca3f87e978d8c9d5d79b9424478a437f59bc9e7ec9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
