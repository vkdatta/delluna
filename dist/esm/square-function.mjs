export const name="square-function";
export const id="dl_eb0d883b25404ed1bf61";
export const url=new URL("../icons/square-function.svg?v=28f9f57f7c1b9b24b6ff4982fb08974a6bd0da7108fcb7ef85ac74c12f54d8d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
