export const name="checkerboard-fill";
export const id="dl_e6ce34ea25ea46cb8ffb";
export const url=new URL("../icons/checkerboard-fill.svg?v=b87a5ec28118baef6c1fa56d65a273247c2cb6ab52df3eab1559fad4d32c2f3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
