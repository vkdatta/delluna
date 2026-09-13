export const name="22mp";
export const id="dl_92385554258741689bed";
export const url=new URL("../icons/2/22mp.svg?v=49aea7d9f0abec90b435a67712f61cf38edbf51e3f8f012009ff1bf15c405094",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
