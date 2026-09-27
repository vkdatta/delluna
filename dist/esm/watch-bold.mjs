export const name="watch-bold";
export const id="dl_5e5b22bb5ae2cc7e523a";
export const url=new URL("../icons/watch-bold.svg?v=41c60fed76dea81d0835e06b1e519cb9af5423cbe5cfd2c7a4468f91e8ddd7aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
