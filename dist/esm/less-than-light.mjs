export const name="less-than-light";
export const id="dl_976ecf6ba56243caab8c";
export const url=new URL("../icons/less-than-light.svg?v=b605128d1d63b24284d4c736e2a87e93540a62a940cc27a82b4a64166eb9c5c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
