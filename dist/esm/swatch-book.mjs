export const name="swatch-book";
export const id="dl_383d3051f2a54f5dac27";
export const url=new URL("../icons/swatch-book.svg?v=2baf848b34a4e237d0047c8627f693f1b7fff352bb83b9be689dc2bf3b974205",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
