export const name="menu_book-fill";
export const id="dl_50c2fe24f4876f38635e";
export const url=new URL("../icons/menu_book-fill.svg?v=262d1f13526a778fb8aa3deaf0bf3cfee0ef78cfd05ce4b429499d10f0668aea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
