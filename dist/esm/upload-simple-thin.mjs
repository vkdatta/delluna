export const name="upload-simple-thin";
export const id="dl_f182ead2b7d07ba9e7c1";
export const url=new URL("../icons/upload-simple-thin.svg?v=31f2518c641621df0f9cc1b51afda60028102daad35815820b71aa17b5e90b37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
