export const name="square-mouse-pointer";
export const id="dl_6696f75afe594bbab860";
export const url=new URL("../icons/square-mouse-pointer.svg?v=45103b994a89f14072396a80eb5ed8b8110f6ae8f8490a64c557b0d0aab27465",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
