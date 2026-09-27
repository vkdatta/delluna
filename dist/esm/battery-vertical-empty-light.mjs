export const name="battery-vertical-empty-light";
export const id="dl_b23a8609db1543869382";
export const url=new URL("../icons/battery-vertical-empty-light.svg?v=417e04aff8c0535e1fd3ead2bdb8e2ddb62b5f1b3613eab799245b6049dbcb0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
