export const name="file-dashed-light";
export const id="dl_e4c1bf731cd14b3ebd9b";
export const url=new URL("../icons/file-dashed-light.svg?v=f86969aa3553188d79a1c09a77a73c75477814a183915101f67d0c31fbd215e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
