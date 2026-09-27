export const name="watch_alert-fill";
export const id="dl_7097649e3591bb767149";
export const url=new URL("../icons/watch_alert-fill.svg?v=a6e90b24cc6a45a047b718890dcd1eaf6964eed496901e43331d1bd95e303a06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
