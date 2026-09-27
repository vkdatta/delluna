export const name="stool-duotone";
export const id="dl_d4f1ab1f9a26e6ccc402";
export const url=new URL("../icons/stool-duotone.svg?v=1d646f6c5bcff238994ac839a10ee2087ad3a7df7928f25d1e974546a921e0ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
