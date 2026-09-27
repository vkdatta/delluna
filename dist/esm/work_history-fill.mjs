export const name="work_history-fill";
export const id="dl_2f24769b541a0f4923af";
export const url=new URL("../icons/work_history-fill.svg?v=1daf50ce72409dd272265e9cb0d5a088c84bd32fa3da3e72b555817fcf658282",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
