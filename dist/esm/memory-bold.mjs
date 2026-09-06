export const name="memory-bold";
export const id="dl_3330cddb60aa47bc9bb0";
export const url=new URL("../icons/memory-bold.svg?v=8591f749542bdf3524a046e63662d3616d95b48e90a154f1da40f3e751c83f77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
