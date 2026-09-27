export const name="webcam-duotone";
export const id="dl_32096aad06639066e3ba";
export const url=new URL("../icons/webcam-duotone.svg?v=5d343123f76d3c1279e9f68cb84dd727301fbb66c5893ab054d250106dc6b842",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
