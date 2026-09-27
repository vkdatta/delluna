export const name="lock-key-open-duotone";
export const id="dl_6dc97c00f3ac470db02c";
export const url=new URL("../icons/lock-key-open-duotone.svg?v=7a6f09fcf595a52cbe7563b00540e2623a324962722333b1fc88de6e8d9eeb07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
