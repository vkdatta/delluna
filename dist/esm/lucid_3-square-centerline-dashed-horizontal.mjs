export const name="lucid_3-square-centerline-dashed-horizontal";
export const id="dl_31bf86d656234bc38f80";
export const url=new URL("../icons/lucid_3-square-centerline-dashed-horizontal.svg?v=db0669b8fbb590b13cbfdc5d45b7ccb2f206dddacedf18bc9c23454be7aae61b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
