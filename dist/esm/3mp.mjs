export const name="3mp";
export const id="dl_0ea33765fbcff3b54007";
export const url=new URL("../icons/3mp.svg?v=267f6a180f33681d301b8f65705ff13300c25820b46facdfb3c353c7f1636729",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
