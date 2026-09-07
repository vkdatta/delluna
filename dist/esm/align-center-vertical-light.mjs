export const name="align-center-vertical-light";
export const id="dl_9bf5d8f218b34cc8851c";
export const url=new URL("../icons/align-center-vertical-light.svg?v=98a4eca590bc95348eeeae213cb94a5be75cb8b5c0f325771ee79e6829c19b62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
