export const name="dataset_linked";
export const id="dl_8d213e873f9641682b48";
export const url=new URL("../icons/dataset_linked.svg?v=53591b5ceacde16a39db95582c8d79890a60d1e9f96c280117a657bc84a64eb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
