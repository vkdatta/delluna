export const name="file_open-fill";
export const id="dl_0e9e0fba7d3520bd4197";
export const url=new URL("../icons/file_open-fill.svg?v=de435c0d79ef491b8b344c62c66170b97574557a830bd00ac945495151a5e787",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
