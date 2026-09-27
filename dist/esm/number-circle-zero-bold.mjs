export const name="number-circle-zero-bold";
export const id="dl_3b33e851942249cd890f";
export const url=new URL("../icons/number-circle-zero-bold.svg?v=2e40d73a324559fa020b6652066ed7b50d97f9fd35c2c04218798b3d878a6202",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
