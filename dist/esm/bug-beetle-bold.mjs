export const name="bug-beetle-bold";
export const id="dl_f9708960e77645a8b794";
export const url=new URL("../icons/bug-beetle-bold.svg?v=378b493a5e5665152d3279d3ee6f2259720d979098aeaf8f6fa4baa42ee2e8a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
