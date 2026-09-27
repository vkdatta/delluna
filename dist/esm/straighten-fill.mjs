export const name="straighten-fill";
export const id="dl_4cd5fa5ee34a28a9699d";
export const url=new URL("../icons/straighten-fill.svg?v=218ba3f4ccaba5e05192f186da65f18a791b192c197a0312f44391c6175333eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
