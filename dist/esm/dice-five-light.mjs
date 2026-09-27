export const name="dice-five-light";
export const id="dl_5ace5a16efe1496eaa94";
export const url=new URL("../icons/dice-five-light.svg?v=3bc3494b81812878092d819975bf60e30a499781197445510e72d2a3893f32df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
