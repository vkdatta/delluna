export const name="account_tree";
export const id="dl_663ae5c6b0df31e4d4c5";
export const url=new URL("../icons/account_tree.svg?v=fc3f585329cef32642e19835a205f1700a4023cc0b48608d33e22d76d8b9e876",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
