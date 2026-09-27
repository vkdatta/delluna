export const name="api";
export const id="dl_6237b5ac85436ed30b91";
export const url=new URL("../icons/api.svg?v=2401fb51a3950d3a48e7444ef3edec505ad9669fef4cb7863332515482ab5edd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
