export const name="build-fill";
export const id="dl_eabbe177043c5ad009d2";
export const url=new URL("../icons/build-fill.svg?v=1a44feed688226a184334abd1ad43a380d9812913572c6ee7e306544012b16cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
