export const name="math-operations-thin";
export const id="dl_81fa4ee03d9346acbd68";
export const url=new URL("../icons/math-operations-thin.svg?v=851446a8a49360c2b56ef2db99710eae68b3de840069f7365813d91154987fdb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
