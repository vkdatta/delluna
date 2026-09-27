export const name="lucid_3-package-x";
export const id="dl_92582cd8d718479c98bb";
export const url=new URL("../icons/lucid_3-package-x.svg?v=78d2db08f1b1aac1ca70463c575da674881a7582674e500f5d65684a467ba1d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
