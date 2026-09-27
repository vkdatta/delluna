export const name="text-aa-fill";
export const id="dl_d23abf16565df63b82f9";
export const url=new URL("../icons/text-aa-fill.svg?v=28f1d80c798774c5f3f8f8fe40e3fbf0d4d9d8bdb7d21e374e366048033ab177",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
