export const name="text-h-four-fill";
export const id="dl_a2a254a821442e00ff99";
export const url=new URL("../icons/text-h-four-fill.svg?v=82bdfb387d1078ced7300a818557383837144343a473808dc4cf1f5c9bd6cbee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
