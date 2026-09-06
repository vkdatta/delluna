export const name="number-three-light";
export const id="dl_fd32639f2bed4d008f4f";
export const url=new URL("../icons/number-three-light.svg?v=0a3be44f6d7bbc6861ded89aef0be213b6cf0283599785fa83341b769f81994e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
