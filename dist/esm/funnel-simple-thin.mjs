export const name="funnel-simple-thin";
export const id="dl_4a06db57ef414c63a093";
export const url=new URL("../icons/funnel-simple-thin.svg?v=9ef18adbb1bd7427aa43ac5d5b5f7021773d14ff0d0079252166a18f5bff3084",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
