export const name="slideshow-bold";
export const id="dl_7f5eb2d2535a7805b8f8";
export const url=new URL("../icons/slideshow-bold.svg?v=b70f02bae29c967573a6059e77bd105aad36fa8ccee7da7061f58028a78f9637",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
