export const name="share-fat-fill";
export const id="dl_16228a9359c9548b81ec";
export const url=new URL("../icons/share-fat-fill.svg?v=e930697000cdb5c946b4560c8f42d3f06bc66f625596ce9315d80d9a262f1d19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
