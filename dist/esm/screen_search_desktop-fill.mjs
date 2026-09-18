export const name="screen_search_desktop-fill";
export const id="dl_da630daf65244662a90f";
export const url=new URL("../icons/screen_search_desktop-fill.svg?v=74f1d301a127b21cf341735488f4b8a9bb19d176d0c4f3b0c9e1912072fdd94c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
