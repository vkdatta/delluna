export const name="vacuum_2_on-fill";
export const id="dl_310bc84a4eb929846734";
export const url=new URL("../icons/vacuum_2_on-fill.svg?v=f473034cb8b9429f61a759696c30625eeb24817ca150fad037d6ec4e49b172dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
