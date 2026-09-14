export const name="abc-fill";
export const id="dl_a9f79870cf304213af76";
export const url=new URL("../icons/A/abc-fill.svg?v=d20bf7fccba543c2be46fbdd8e22ea647dfb36fc206f156e86bb8f6909b5ea01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
