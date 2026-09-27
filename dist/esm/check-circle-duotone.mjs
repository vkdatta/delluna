export const name="check-circle-duotone";
export const id="dl_26ecfd92df41420fb35d";
export const url=new URL("../icons/check-circle-duotone.svg?v=2b1feee0b264420cfacd2d3a92df4b2fd7861a7ecb702e3ede60c4da4d79c1b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
