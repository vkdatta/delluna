export const name="camera-plus-bold";
export const id="dl_631c0127b7684cb48ef2";
export const url=new URL("../icons/camera-plus-bold.svg?v=ab72138561396993cd1bb399dfe4dea409c6e556dad0b02c39e70494d66a9c81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
