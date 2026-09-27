export const name="crop_7_5";
export const id="dl_ba552c03d528faf77c57";
export const url=new URL("../icons/crop_7_5.svg?v=4078a31e483b2a7f01397ae8e56e60ca3a923740043de8d21155da4f11aa30c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
