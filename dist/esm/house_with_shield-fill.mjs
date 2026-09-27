export const name="house_with_shield-fill";
export const id="dl_1a38053cb9bfd1179b64";
export const url=new URL("../icons/house_with_shield-fill.svg?v=5cc939c3c25081be5970f7e41bc2351f5133bec2b0fece1cf2f705d91f2f022d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
