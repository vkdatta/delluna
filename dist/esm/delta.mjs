export const name="delta";
export const id="dl_0ebf73629b3043d58041";
export const url=new URL("../icons/delta.svg?v=fc0d9b3a213cbcbffc18d3726bff3a63682fc461e0297728389eb52130d0aef6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
