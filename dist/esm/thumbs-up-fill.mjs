export const name="thumbs-up-fill";
export const id="dl_040203e851f59ec8dde6";
export const url=new URL("../icons/thumbs-up-fill.svg?v=cecb6627e6e0013e8f91eb047eb9ed4e9803595db4c1226b46fbf6c202981611",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
