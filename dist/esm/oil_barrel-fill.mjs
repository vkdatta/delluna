export const name="oil_barrel-fill";
export const id="dl_b8562d14f6c8780bf34b";
export const url=new URL("../icons/oil_barrel-fill.svg?v=da0c5085f67e9afea6b37ff622b75c7bc6d101e7b794980d21269b28b8fe004f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
