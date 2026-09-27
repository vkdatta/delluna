export const name="share-network-bold";
export const id="dl_2b58806d7d3d9f4d24ee";
export const url=new URL("../icons/share-network-bold.svg?v=0ac8b84c4446592027df7f9d9c79eec6b421375da7a01fe148ce3baaa7908d17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
