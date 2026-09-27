export const name="cast_pause-fill";
export const id="dl_1e6dce1175d4e4cec48a";
export const url=new URL("../icons/cast_pause-fill.svg?v=dcee222c93267fdd704f4e1ec98ba63d85e7f4fd7199a970cdfba986205df5e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
