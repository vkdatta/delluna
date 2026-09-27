export const name="cast-fill";
export const id="dl_96d39ba37c05cee3bf70";
export const url=new URL("../icons/cast-fill.svg?v=fcb54ee741b1bd008c378ce32809fd475e008658a1838cbdbc87b9bce1c02321",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
