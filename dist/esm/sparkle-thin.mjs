export const name="sparkle-thin";
export const id="dl_54b9a0053184522e5b1e";
export const url=new URL("../icons/sparkle-thin.svg?v=27cc7269f0ea175fcb1deca3cb60f403b71f1412b037e9921b52d47dff5b0d5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
