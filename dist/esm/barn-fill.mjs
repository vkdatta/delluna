export const name="barn-fill";
export const id="dl_f77941bc1bf84781bb79";
export const url=new URL("../icons/barn-fill.svg?v=09918e87f741a5b30f9a53f2bab8ce5727679d6f722820892c17a16c1e9a6c63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
