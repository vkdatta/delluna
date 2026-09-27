export const name="bluetooth-connected-bold";
export const id="dl_3ea0c7ea119247568471";
export const url=new URL("../icons/bluetooth-connected-bold.svg?v=938d20bc44e83c21cf8abe3e05a979636b1f7f2b86b8fff7475106fd5b6a3d8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
