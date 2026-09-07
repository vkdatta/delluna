export const name="cloud-fog-thin";
export const id="dl_efbc83d5d8d34fa6acbb";
export const url=new URL("../icons/cloud-fog-thin.svg?v=712c668709cc9b2b1d7727a950ac25f38b942afa96d908afebf324c2ad012603",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
