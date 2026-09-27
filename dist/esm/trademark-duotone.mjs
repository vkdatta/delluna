export const name="trademark-duotone";
export const id="dl_192321ace34135c5c28f";
export const url=new URL("../icons/trademark-duotone.svg?v=42bc849f17b87e5e9068ce4e1a395337b98b725cb5ccb770160a5fb4b9ad930a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
