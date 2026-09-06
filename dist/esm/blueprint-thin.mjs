export const name="blueprint-thin";
export const id="dl_2368c92cd8604f87a54b";
export const url=new URL("../icons/blueprint-thin.svg?v=acae9ea3d5c6cd4defca56c23450de1b2f77be5666fb48f94c8e6a5892d0bef1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
