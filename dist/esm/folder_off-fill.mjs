export const name="folder_off-fill";
export const id="dl_e40ef0ddc5234d7e8ac5";
export const url=new URL("../icons/F/folder_off-fill.svg?v=85646153e62db49fb7ad8173f9ef03b4dbaae546ae3a6237fb4ca9423c9a047a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
