export const name="battery-plus-vertical-duotone";
export const id="dl_72a29c5ac40d4285ac40";
export const url=new URL("../icons/battery-plus-vertical-duotone.svg?v=4affc3ffbfd73c707841a6c1373dc8d3e0fb8eb51d457d183d1f14ab3531e417",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
