export const name="keyboard_hide";
export const id="dl_fcdd22b0c82daad5e3d4";
export const url=new URL("../icons/keyboard_hide.svg?v=da1ebd70483dec05075ee2b614c36305fefe25c900670e68ea938bf669499c4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
