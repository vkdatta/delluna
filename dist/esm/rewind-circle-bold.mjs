export const name="rewind-circle-bold";
export const id="dl_a6a5148d2bc247a4a83a";
export const url=new URL("../icons/rewind-circle-bold.svg?v=9e023c7a3b1472202f34b41939d6b8b95dd5d2d8e7e49abadaf6b0de6fc8a747",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
