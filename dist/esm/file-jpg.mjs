export const name="file-jpg";
export const id="dl_93050cdb6842496bbb32";
export const url=new URL("../icons/file-jpg.svg?v=ab22ae6ac8ce826ea45fd958401b8aecb3b191f32bf3a49e8018e15c69aa21a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
