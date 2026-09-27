export const name="number-circle-two-fill";
export const id="dl_9ce49909428842f58661";
export const url=new URL("../icons/number-circle-two-fill.svg?v=aa94a32cf204aff4edf549a10746e8586cf0f92c9840eda7959fbec94d180d9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
