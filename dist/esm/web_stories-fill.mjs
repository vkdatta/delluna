export const name="web_stories-fill";
export const id="dl_ec20079729098763dd8c";
export const url=new URL("../icons/web_stories-fill.svg?v=d0d466386beec68fc6765938dd00ef195e73ca55ffd31b0bf40497c8d958270b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
