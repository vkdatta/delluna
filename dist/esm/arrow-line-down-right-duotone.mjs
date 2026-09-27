export const name="arrow-line-down-right-duotone";
export const id="dl_8bf5d72b4a654b92b9a1";
export const url=new URL("../icons/arrow-line-down-right-duotone.svg?v=f12b8db2a2b3411cb21159f1b4112e1e4c94006608366a103575dd5301033c06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
