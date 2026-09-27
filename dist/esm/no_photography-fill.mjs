export const name="no_photography-fill";
export const id="dl_5fb166d7e6e849328937";
export const url=new URL("../icons/no_photography-fill.svg?v=00e317ef5cf0c05f78d248ec6cf5cc133e8cccaaebb6dc267ec861d1680879a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
