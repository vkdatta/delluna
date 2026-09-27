export const name="office-chair-light";
export const id="dl_011869c5c9a84528b2b4";
export const url=new URL("../icons/office-chair-light.svg?v=c19f07358cd90d4e595b8183b886ccdf0f9be0b44e38e90b80a0388d2f030a2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
