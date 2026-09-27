export const name="building-office";
export const id="dl_85a08f01773e4f67a094";
export const url=new URL("../icons/building-office.svg?v=dbda782811d8a2e8da500f35aa8f823a8a75f7ba77ddc0db6d01320441dfec2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
