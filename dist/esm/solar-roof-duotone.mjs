export const name="solar-roof-duotone";
export const id="dl_f1fbf9c5ea094007bbab";
export const url=new URL("../icons/S/solar-roof-duotone.svg?v=5842427f2ff8e6d2166ba25c37e9935916996dbd2abc846358027ab0b8a78676",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
