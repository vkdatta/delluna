export const name="lucid_3-shower-head";
export const id="dl_ed2249c7e5944ea3b464";
export const url=new URL("../icons/lucid_3-shower-head.svg?v=57b6feba00fed4bcea63b342e752f458839c94c6ec98fa82f750643c9716e373",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
