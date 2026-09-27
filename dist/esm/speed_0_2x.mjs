export const name="speed_0_2x";
export const id="dl_e0d7e56ae2fc5943a6f9";
export const url=new URL("../icons/speed_0_2x.svg?v=21fd4eb42bfe8b85d85a2f95e0e88eeb47fdb17328c986bc5e4e22e516c3acb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
