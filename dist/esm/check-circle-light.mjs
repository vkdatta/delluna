export const name="check-circle-light";
export const id="dl_1b70de51c3c94635812a";
export const url=new URL("../icons/check-circle-light.svg?v=c64e86f8bde836fec40ebcde3372b06da588275782592e1636b71913c038bdbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
