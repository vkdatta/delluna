export const name="castle-turret-bold";
export const id="dl_8b294678cee54000bd39";
export const url=new URL("../icons/castle-turret-bold.svg?v=1b2847528151960e2f327b6ddcab54f30206d5058651cef4805abf29f56c019c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
