export const name="6k_plus";
export const id="dl_12f4745f40569b607676";
export const url=new URL("../icons/6k_plus.svg?v=8449cf375da96e7e67763d9e379b89eabe3fe376c0b0433e3654174557f1f6df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
