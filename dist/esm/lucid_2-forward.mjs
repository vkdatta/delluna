export const name="lucid_2-forward";
export const id="dl_a3dceee7ac0f4582892e";
export const url=new URL("../icons/lucid_2-forward.svg?v=021edbe10683a9b3dba81cde932e1a609e2868c675e422a1ddff42f8c330c72d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
