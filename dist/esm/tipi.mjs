export const name="tipi";
export const id="dl_fd719c4f4cc315628e3c";
export const url=new URL("../icons/tipi.svg?v=d7ba13d3d13a00b37dbf127abe1094a6425f6ef7cbbc1be8ed5b8b8cbab12b9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
