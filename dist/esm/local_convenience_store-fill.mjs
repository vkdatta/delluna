export const name="local_convenience_store-fill";
export const id="dl_8e0287863457d2f7bd61";
export const url=new URL("../icons/local_convenience_store-fill.svg?v=8099b67251459782569f939bf4c58581e5babd08a35bf75ee1bf3a7792514068",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
