export const name="suitcase-rolling-bold";
export const id="dl_881aaeb04664e2fbe9d6";
export const url=new URL("../icons/suitcase-rolling-bold.svg?v=5bb5936b26d3c55d822e85e8f19042983dcbc4c076cb5f489858e78552bef9cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
