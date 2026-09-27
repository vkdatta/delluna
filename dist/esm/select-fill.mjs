export const name="select-fill";
export const id="dl_5fbdadbc1734c70a04f5";
export const url=new URL("../icons/select-fill.svg?v=00a926a13175943bda5139faedb42f6a39517bf43b2d2e52dc5a2ad4db1ac92d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
