export const name="accessibility-fill";
export const id="dl_f7866866f088e8f91bb8";
export const url=new URL("../icons/accessibility-fill.svg?v=965647106b7073fc51c1f80c9b3b7c3e52ddc721a1751f9f0cdc35ea60fbe0e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
