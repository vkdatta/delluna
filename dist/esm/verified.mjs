export const name="verified";
export const id="dl_ea85dad4bb60f8034c32";
export const url=new URL("../icons/verified.svg?v=ff5ab323f44e71f457734ad4c28ceae9ab10be12f5b9d304c292a43c045dfd8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
