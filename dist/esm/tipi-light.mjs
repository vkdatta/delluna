export const name="tipi-light";
export const id="dl_02724271caf78ad04327";
export const url=new URL("../icons/tipi-light.svg?v=0872088f56a96581c2c8a30755ef6ee256e29a1d8754e3b270d76419a331005a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
