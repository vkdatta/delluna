export const name="folder_limited-fill";
export const id="dl_b8e9593e969f1af4198d";
export const url=new URL("../icons/folder_limited-fill.svg?v=b3f50a9310c75f4d7b4066432d7daa413df00f269b2d859f0f2886c8fd5ff205",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
