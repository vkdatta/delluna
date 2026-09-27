export const name="gradient";
export const id="dl_38f1febde70642a9b999";
export const url=new URL("../icons/gradient.svg?v=c3dd3c7ba967a6f9f856933af8911b25d74c58fd2ae2a46cc872157e4bd1ed02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
