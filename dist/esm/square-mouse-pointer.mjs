export const name="square-mouse-pointer";
export const id="dl_6696f75afe594bbab860";
export const url=new URL("../icons/square-mouse-pointer.svg?v=451171b20524cfe15d31304f17f25b1ed492fd4c4ab1e65acadaa66b32f6beed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
