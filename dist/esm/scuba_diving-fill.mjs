export const name="scuba_diving-fill";
export const id="dl_67b4750bd6d6066fefbe";
export const url=new URL("../icons/scuba_diving-fill.svg?v=808f0b4b96cd493fae793730a5819acc0a47188a27fede3f1095357456ad7b55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
