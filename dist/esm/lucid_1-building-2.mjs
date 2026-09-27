export const name="lucid_1-building-2";
export const id="dl_cd5854a3a5e84f49b45c";
export const url=new URL("../icons/lucid_1-building-2.svg?v=e35d5362731edb6a43306a41d2ec63f93867f02d912d8cd5c849248dbfacb417",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
