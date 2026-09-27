export const name="arrow-right";
export const id="dl_0b0457b1f332433f8a3c";
export const url=new URL("../icons/arrow-right.svg?v=3ae3846fcad8fbaa7d9ea6b5b678d66900045ce882147a623a653f23051f7427",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
