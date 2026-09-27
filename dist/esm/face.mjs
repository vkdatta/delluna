export const name="face";
export const id="dl_b92299f3bea8de3a3ed6";
export const url=new URL("../icons/face.svg?v=952149693514dad0354a15ada41bba95b456224417a7743a23f0add137a40495",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
