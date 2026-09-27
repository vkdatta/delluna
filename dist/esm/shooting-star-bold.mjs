export const name="shooting-star-bold";
export const id="dl_5a0dd409a6d0a9b96b6a";
export const url=new URL("../icons/shooting-star-bold.svg?v=46f045bca901912da40e249579c511ba986775978959a974ea283690c52f21ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
