export const name="ladder-fill";
export const id="dl_2417d711d31a4e98b808";
export const url=new URL("../icons/ladder-fill.svg?v=af08f5a5514db9ad1aa4faa0cabb2388d73db55ddecf536ab7b98d7317c944ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
