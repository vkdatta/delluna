export const name="washing-machine-fill";
export const id="dl_c1d24d014c74830cc134";
export const url=new URL("../icons/washing-machine-fill.svg?v=8525d68478775f3473d8ec45351c4a4649768187368f55c31dfae1c241414288",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
