export const name="group_remove-fill";
export const id="dl_3da3f58338862b22b2b8";
export const url=new URL("../icons/group_remove-fill.svg?v=965b7ae96d947e062af3ef5a2f3adf2f6ebf7958cfe36b4fd4787945d5dbb969",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
