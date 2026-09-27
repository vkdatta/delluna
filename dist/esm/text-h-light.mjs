export const name="text-h-light";
export const id="dl_87c2ab6b0561a027474f";
export const url=new URL("../icons/text-h-light.svg?v=a96e76c9d0de0475f4bde191664c890950aadcf90e362d1c0b5ac135b00ce71a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
