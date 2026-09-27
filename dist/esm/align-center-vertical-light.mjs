export const name="align-center-vertical-light";
export const id="dl_9bf5d8f218b34cc8851c";
export const url=new URL("../icons/align-center-vertical-light.svg?v=8e094ab496a4bc4f37df8e46d313d575cc69e1baa916af81adccd496046a90a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
