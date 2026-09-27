export const name="greater-than-fill";
export const id="dl_09b1365433c9459faaef";
export const url=new URL("../icons/greater-than-fill.svg?v=d95d76bc0eac33fa9a1baa850ba4bc38ddaa10f03cad69606056de6dcbf6aa87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
