export const name="user-circle-gear";
export const id="dl_43ee9dcdb17813b44946";
export const url=new URL("../icons/user-circle-gear.svg?v=e86d31e77bce2938d461f39f49815b2ef2a72e008f00bca7d5654db9cf56d961",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
