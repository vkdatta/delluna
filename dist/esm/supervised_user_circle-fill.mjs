export const name="supervised_user_circle-fill";
export const id="dl_5b85b862af4c741ee731";
export const url=new URL("../icons/supervised_user_circle-fill.svg?v=479f25e6cb881cb48d3cb30995e8c06ccc095fa83974fd6a07141da246cd57ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
