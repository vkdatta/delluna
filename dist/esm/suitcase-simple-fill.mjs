export const name="suitcase-simple-fill";
export const id="dl_1d2f03cb6a0ecfb370f6";
export const url=new URL("../icons/suitcase-simple-fill.svg?v=d2c165c7e40f8b6fc31d0acb7ed69f23f15a3d61c3578225b03f46531fe1e198",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
