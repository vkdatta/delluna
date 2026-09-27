export const name="folder-simple-minus-light";
export const id="dl_e5d03018a7d746d3b659";
export const url=new URL("../icons/folder-simple-minus-light.svg?v=4885e140f4cfb7a7301eea8a209d9b295748ab6b7aecb28d984363e358db421b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
