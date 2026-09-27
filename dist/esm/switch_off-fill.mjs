export const name="switch_off-fill";
export const id="dl_bd1dc7dc744d0edd3f99";
export const url=new URL("../icons/switch_off-fill.svg?v=7b621add0e1b7a666524df03692497c415d3ca95b75b4e369d3e110dcc4d70f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
