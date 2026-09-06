export const name="cloud-arrow-down-fill";
export const id="dl_1fc0e1a92d07486d9d9e";
export const url=new URL("../icons/cloud-arrow-down-fill.svg?v=c608f0f6c688fa1a38dae14aad4b9b5857434e0c7fd8c722107e515f36e86cb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
