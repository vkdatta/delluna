export const name="cloud-sun-duotone";
export const id="dl_7fdcc94cb2394560b0ac";
export const url=new URL("../icons/cloud-sun-duotone.svg?v=ef47055857ace30ff7ee979461d390b7e9aa7f3d040869ef9fc6d6f8b5f1689b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
