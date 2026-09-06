export const name="delta";
export const id="dl_0ebf73629b3043d58041";
export const url=new URL("../icons/delta.svg?v=2957737517a0ab28ea9302ecf833553faa218e99ae8edae48c911842e7940585",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
