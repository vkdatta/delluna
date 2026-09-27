export const name="bus-light";
export const id="dl_8850583db6d24cea9ccb";
export const url=new URL("../icons/bus-light.svg?v=5cdefc795232ad350c38c47fc5e608163784e00150d4b9ada4bcce758dbbecd6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
