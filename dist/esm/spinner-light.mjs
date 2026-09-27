export const name="spinner-light";
export const id="dl_02d021e781c4bafbffe8";
export const url=new URL("../icons/spinner-light.svg?v=50627c728a9b4b082dedf011dd8d9f98e5cbf938ca38fb6c88df31b705261a72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
