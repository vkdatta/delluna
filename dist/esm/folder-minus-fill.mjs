export const name="folder-minus-fill";
export const id="dl_0618795e50084ee1a605";
export const url=new URL("../icons/folder-minus-fill.svg?v=2f7a6f204a1150d9cff1c333acc9f6253b4be8e6d5dbdae397f9167e5b41d63a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
