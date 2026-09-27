export const name="noise_control_on";
export const id="dl_a0a40507c4d533eb5de0";
export const url=new URL("../icons/noise_control_on.svg?v=a3fbd3528a74e56358df763617f97ba129f3c99422276e46ab91302a7b2b5a03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
