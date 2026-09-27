export const name="mobile_dock";
export const id="dl_87f622d5ad37a727e0ff";
export const url=new URL("../icons/mobile_dock.svg?v=812cf1d156b64d208cd394554088d3dabc833bbe7e48ff460af5d12a7b831d06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
