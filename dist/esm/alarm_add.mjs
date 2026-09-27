export const name="alarm_add";
export const id="dl_808df66537b0980c8cdd";
export const url=new URL("../icons/alarm_add.svg?v=66c665c4eef3ed139958b33a6552b71cb994abb2906c8854869b1ee4a0242467",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
