export const name="three-d-light";
export const id="dl_78002390f3b5847e39c0";
export const url=new URL("../icons/three-d-light.svg?v=ca01728c968b9e7134305882232b54a95a8a20fc534e396a47087bdd3b7d9ddc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
