export const name="folder_off-fill";
export const id="dl_2ce09a1e9623edf2ce0a";
export const url=new URL("../icons/folder_off-fill.svg?v=85646153e62db49fb7ad8173f9ef03b4dbaae546ae3a6237fb4ca9423c9a047a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
