export const name="eye-slash-duotone";
export const id="dl_b02712b9b9844bc2bcee";
export const url=new URL("../icons/eye-slash-duotone.svg?v=12621b19b8e4701e9d439b233b558db179aef5fa2c4f5ab65b8fbbb9c954859e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
