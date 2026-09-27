export const name="trademark-bold";
export const id="dl_9d708fdbc10bba16824a";
export const url=new URL("../icons/trademark-bold.svg?v=c9c82db3e5286bf460037be74f3d8316aedfb88480c3a1b98c8ffef9f2d3268a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
