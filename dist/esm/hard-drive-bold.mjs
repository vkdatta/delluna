export const name="hard-drive-bold";
export const id="dl_ad9d46ee58db4783824a";
export const url=new URL("../icons/hard-drive-bold.svg?v=d544aee9c32baf8c2a75f55b696ff2a5e789dc09a98b3b1201b136bd8a6e871f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
