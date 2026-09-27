export const name="path-bold";
export const id="dl_37e5f20ad2fc4a24a20e";
export const url=new URL("../icons/path-bold.svg?v=a9f5ee417bf1f48f5baf4eb21b20fec4ffd8d0aaa254519e0a804e0ae4337652",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
