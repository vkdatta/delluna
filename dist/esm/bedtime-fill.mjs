export const name="bedtime-fill";
export const id="dl_338c2dcd47ab5ce45d41";
export const url=new URL("../icons/bedtime-fill.svg?v=43e478544a4b20d1855ebbe342a4272614f816f05053dff421cc4271c4ed86a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
