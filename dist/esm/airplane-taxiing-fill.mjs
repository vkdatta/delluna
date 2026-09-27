export const name="airplane-taxiing-fill";
export const id="dl_781f555ccf7a4809b735";
export const url=new URL("../icons/airplane-taxiing-fill.svg?v=18edfa81ebf8b168da44abab6d3f78f0ecb971def84779b4c73935b6c073dfcb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
