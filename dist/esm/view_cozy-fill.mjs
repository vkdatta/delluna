export const name="view_cozy-fill";
export const id="dl_4cc4d611316e4d6b8e61";
export const url=new URL("../icons/view_cozy-fill.svg?v=d50cb8e6a5d9b994a20ffed48359b7f744a95c5113fa069696e7574b91b62458",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
