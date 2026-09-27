export const name="shopping-bag-open-fill";
export const id="dl_263558a214a3ab684d5a";
export const url=new URL("../icons/shopping-bag-open-fill.svg?v=7e7080edea3670c44e1af077ccb5d36e200ab422603a889ed0c62eb195efcc5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
