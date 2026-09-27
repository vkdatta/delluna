export const name="scribble";
export const id="dl_305601c238fea6f7d65a";
export const url=new URL("../icons/scribble.svg?v=ab0e7f844896a334218992948cb410d14f33c8ed5675e8f940f5c20173ec9d9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
