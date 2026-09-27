export const name="manga";
export const id="dl_9c51b5462c14cf81b9de";
export const url=new URL("../icons/manga.svg?v=8081306c927f52a377cf40930fe8e5f5b6bc486ffb0abcc71948b11964614182",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
