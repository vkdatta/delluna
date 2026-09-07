export const name="crown-duotone";
export const id="dl_c57aa75afa62404fa9c7";
export const url=new URL("../icons/crown-duotone.svg?v=0a5e35f6dc830d6bc593876df2fefc2fd02434ac0ce802ccd1a15307c9ebcc04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
