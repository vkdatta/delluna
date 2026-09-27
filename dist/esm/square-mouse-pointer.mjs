export const name="square-mouse-pointer";
export const id="dl_6696f75afe594bbab860";
export const url=new URL("../icons/square-mouse-pointer.svg?v=6bfec5984273c22effca533609ee45e29e2a22f94292f7177b3bfbd68d420cb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
