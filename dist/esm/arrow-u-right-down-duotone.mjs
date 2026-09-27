export const name="arrow-u-right-down-duotone";
export const id="dl_5f31eec661f546ca9763";
export const url=new URL("../icons/arrow-u-right-down-duotone.svg?v=82f35fc63c4b3fb833ee3fd35d4ce7c082fe114103a8b94e174ab29d8469f8cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
