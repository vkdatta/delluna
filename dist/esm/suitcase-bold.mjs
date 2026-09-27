export const name="suitcase-bold";
export const id="dl_d9b8067c5088a1b071be";
export const url=new URL("../icons/suitcase-bold.svg?v=77d4abb7452eaf508c0d5a0cdadd748386f0a0c5d40652f7044c7fa1d8b5921b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
