export const name="cell_wifi-fill";
export const id="dl_ed8b7a92a20db5145c31";
export const url=new URL("../icons/cell_wifi-fill.svg?v=77f27be194b1c47ce25d2a1b8b3c30cd5737f8ce4a4e8a5b2b1f0091ea0e3f5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
