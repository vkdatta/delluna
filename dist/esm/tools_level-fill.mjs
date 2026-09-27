export const name="tools_level-fill";
export const id="dl_ade8f26b51005d08ae76";
export const url=new URL("../icons/tools_level-fill.svg?v=0e5863002174c79584567b33ddea512cad9391affacc65487beebdd7c4d25fb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
