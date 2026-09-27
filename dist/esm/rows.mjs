export const name="rows";
export const id="dl_7abaad558ca64f9aace5";
export const url=new URL("../icons/rows.svg?v=28b42dbfc5e0c975cd01391c3e059ea83ce52f0ec460a811c49b12f4b50d433b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
