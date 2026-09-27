export const name="cat";
export const id="dl_51fe692d9a6d4515bf02";
export const url=new URL("../icons/cat.svg?v=81db639ae6c1de1dcf5e9d97258fd9daf1f9f819bbb40bbdd778f42cb2998fde",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
