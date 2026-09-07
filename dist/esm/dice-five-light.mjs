export const name="dice-five-light";
export const id="dl_5ace5a16efe1496eaa94";
export const url=new URL("../icons/dice-five-light.svg?v=e578044b35d0268b3ef02cfa7688fcd08ebc8fb66eecc14ee3c08780db748aef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
