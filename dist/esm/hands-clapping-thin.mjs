export const name="hands-clapping-thin";
export const id="dl_e1b283cc00214d779bac";
export const url=new URL("../icons/hands-clapping-thin.svg?v=f3b004742e03e84204a4086a86a14bced4a213336304f63a3d36a225db2838a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
