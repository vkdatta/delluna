export const name="duo-fill";
export const id="dl_564ec30514ea45a3a10f";
export const url=new URL("../icons/D/duo-fill.svg?v=c567ec026127d9c3cb4f348dc8fbdce37ae44307af0ca4eccee4ac27217174f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
