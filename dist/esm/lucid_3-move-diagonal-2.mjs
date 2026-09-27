export const name="lucid_3-move-diagonal-2";
export const id="dl_0d1a7bace9f74b90aa27";
export const url=new URL("../icons/lucid_3-move-diagonal-2.svg?v=329c48c451b0e0ea4609d2f4f7bce9c6366c6d7158695edf9d1ab25f928d60b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
