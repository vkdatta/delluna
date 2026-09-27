export const name="comedy_mask-fill";
export const id="dl_e591cf811d7a77048651";
export const url=new URL("../icons/comedy_mask-fill.svg?v=82b055f4c846370ead01e2665ffcdd2b66cdbe08e0395f6ea7cfe3c681d17f52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
