export const name="face-mask-light";
export const id="dl_7e0b2faff77a42799f01";
export const url=new URL("../icons/face-mask-light.svg?v=eb494af5e61f9e1b888ce9698346842357fc9a4aa59c9c6053836fba53fb37f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
