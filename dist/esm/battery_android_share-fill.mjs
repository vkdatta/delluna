export const name="battery_android_share-fill";
export const id="dl_347faf1e52c78b321a36";
export const url=new URL("../icons/battery_android_share-fill.svg?v=46ed3fbe6b88499c27e60e8eaadbb20c13b793b41c88406eeb2903040b28ec5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
