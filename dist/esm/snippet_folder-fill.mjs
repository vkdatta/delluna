export const name="snippet_folder-fill";
export const id="dl_aafd34052ec7ed5de57c";
export const url=new URL("../icons/snippet_folder-fill.svg?v=33cb4e4dfffe7a21a1e176a926594b29066d3a82ac897abb704aaa71ca08bae7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
