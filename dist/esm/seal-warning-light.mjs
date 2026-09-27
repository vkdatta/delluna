export const name="seal-warning-light";
export const id="dl_879190208d4dc4bdc11a";
export const url=new URL("../icons/seal-warning-light.svg?v=2d772f7fbc576ee5f003eb1b1cb6d8f08756a627296fca81413524547275a5bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
