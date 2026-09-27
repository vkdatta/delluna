export const name="local_bar-fill";
export const id="dl_ec9c848c493a5f47f209";
export const url=new URL("../icons/local_bar-fill.svg?v=436dbdacf054bd6082d8e16050150c3b6d2dc7d3be0e4ea87315ca776be105bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
