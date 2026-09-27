export const name="thumb_up-fill";
export const id="dl_0a9542d351dd74347b1e";
export const url=new URL("../icons/thumb_up-fill.svg?v=c2bf8ae9ca0710a73cdc8c73c5497f8742e092408889b68927f058e2095ebb97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
