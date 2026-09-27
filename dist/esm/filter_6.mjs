export const name="filter_6";
export const id="dl_6de063a483636b34474c";
export const url=new URL("../icons/filter_6.svg?v=ae4347f6d0de75cd5270806d72f66e6947c949167449aee7bee6bdca9786c246",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
