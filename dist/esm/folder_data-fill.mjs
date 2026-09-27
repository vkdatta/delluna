export const name="folder_data-fill";
export const id="dl_d65ffd9f3439f7c62d9c";
export const url=new URL("../icons/folder_data-fill.svg?v=06517f29a99d807c63f6a6344bf327eccfd42d40c22b10d72efc245b4f8310b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
