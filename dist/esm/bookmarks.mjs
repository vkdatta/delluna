export const name="bookmarks";
export const id="dl_858088bf514b44faac82";
export const url=new URL("../icons/bookmarks.svg?v=c92b421b17e34c1def0854dd8314c6a0bcc2a0d7776aed60432f27014ecfa80f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
