export const name="lucid_3-option";
export const id="dl_f249ae7d1c574c8fb6d1";
export const url=new URL("../icons/lucid_3-option.svg?v=035153367043831d2f5864faafcf062d91df4be3a4733bc142157770f27ec35b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
