export const name="chair";
export const id="dl_dd8d2a0dfd2044cc8bad";
export const url=new URL("../icons/chair.svg?v=8013737d224213fd051212478e1ebb1da17c50a8e641a18b8fc7b42c2c779f84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
