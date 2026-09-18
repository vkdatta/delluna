export const name="tab_search";
export const id="dl_671e1a9c5847477a8e16";
export const url=new URL("../icons/T/tab_search.svg?v=4462e49909198b5468f593cac3d8fdb3d19438231a901457025573c6ce004467",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
