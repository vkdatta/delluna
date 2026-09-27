export const name="groups_2";
export const id="dl_31864ec35af9c239916b";
export const url=new URL("../icons/groups_2.svg?v=63460fb42283579e198ec028040a996e4e6d074400d56c98859247659676f3e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
