export const name="arrow-bend-down-right-duotone";
export const id="dl_aa85fdda2eb04401ad97";
export const url=new URL("../icons/arrow-bend-down-right-duotone.svg?v=13c1718c96931f0651962e303bd8425b555202e7404f064a8a99a7f26c251182",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
