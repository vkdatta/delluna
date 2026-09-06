export const name="plus-circle";
export const id="dl_9b54ca5f5d064e3bb206";
export const url=new URL("../icons/plus-circle.svg?v=592d418a2e4af4f1f111b65da8e548d4dc5ae981d7ca883ff447a3af0f34ef39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
