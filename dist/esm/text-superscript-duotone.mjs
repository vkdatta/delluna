export const name="text-superscript-duotone";
export const id="dl_abf27d0d39cd422e808c";
export const url=new URL("../icons/T/text-superscript-duotone.svg?v=37edbbf1e5d03857baeec9067d3b582d520ea48681d70fe417bb83f7a79f7680",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
