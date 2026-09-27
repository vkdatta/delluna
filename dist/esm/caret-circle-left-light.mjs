export const name="caret-circle-left-light";
export const id="dl_6cf4e77ae7044030b7e5";
export const url=new URL("../icons/caret-circle-left-light.svg?v=a5636c0a851c2a5c7ddd762d4c4adaa58614da1336f04d06e5307a4aba8dee10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
