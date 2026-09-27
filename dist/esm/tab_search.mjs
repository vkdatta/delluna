export const name="tab_search";
export const id="dl_f10e5c240246ef640aff";
export const url=new URL("../icons/tab_search.svg?v=a4e714121d2bc13ec0c8b9bef0694b0f371d8c7ea8b3a257afcc89c314ec7d1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
