export const name="cheers";
export const id="dl_c6c7c3c492e8440fab26";
export const url=new URL("../icons/cheers.svg?v=3530ed7d9414b356ae034c442d1662867af64ea62bc6eff699bc70586d119caa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
