export const name="cloud_alert-fill";
export const id="dl_f91f567aa934cf9bff93";
export const url=new URL("../icons/cloud_alert-fill.svg?v=2b026792084949dcef9e518694c4b733ccde1f01317c913c070cf6fee27115be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
