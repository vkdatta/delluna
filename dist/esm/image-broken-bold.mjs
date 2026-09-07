export const name="image-broken-bold";
export const id="dl_397fbde81ebf4f848a00";
export const url=new URL("../icons/image-broken-bold.svg?v=f70ebb4546e726952f6e02fc299cdda37b81ff78a11bf3593dab01eee8d41a69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
