export const name="train";
export const id="dl_c22c35d8e893496e937a";
export const url=new URL("../icons/T/train.svg?v=07fc0688faa9a521d38f5b49caeb118c329461646ce5b9238889642c8af73a3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
