export const name="published_with_changes";
export const id="dl_31785f6e37da5733cf35";
export const url=new URL("../icons/published_with_changes.svg?v=53854b0417ff0d1ba759957c4058c88b86ed40d169e4cf2ad8d8249c0413113e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
