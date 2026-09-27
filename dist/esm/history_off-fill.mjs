export const name="history_off-fill";
export const id="dl_20e293616dfdeafe9a1d";
export const url=new URL("../icons/history_off-fill.svg?v=49b796cb2dbb5e3436b032d7b7f5c713e76c1c6db12b06ca2e42ee5ac44bdc60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
