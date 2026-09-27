export const name="paint-brush-household-duotone";
export const id="dl_a49556c6e0ea4723ae23";
export const url=new URL("../icons/paint-brush-household-duotone.svg?v=797817b1bbea234656c32b9853d54a13d80dc274a239d50817f96078d50913bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
