export const name="earbud_right-fill";
export const id="dl_4bf929c59c723447df43";
export const url=new URL("../icons/earbud_right-fill.svg?v=6821997330b7dbba25ee3dce5ea467962cf2b329d13db25cb75d6e4949b4e4c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
