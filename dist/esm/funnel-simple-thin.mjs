export const name="funnel-simple-thin";
export const id="dl_4a06db57ef414c63a093";
export const url=new URL("../icons/funnel-simple-thin.svg?v=8270baf958552cc45888c62bd10764091ef9d64ac73503be7cd7e84e3f82d08f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
