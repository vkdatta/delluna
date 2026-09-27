export const name="shield_watch";
export const id="dl_71cc30e6ecfb28189ba2";
export const url=new URL("../icons/shield_watch.svg?v=2283a78aee9dfcaa7f4b26ddfb8f26d163f74ca906d3d9eddd7883519a1e9f1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
