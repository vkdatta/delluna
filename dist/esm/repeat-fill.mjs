export const name="repeat-fill";
export const id="dl_35394de6397d4187b156";
export const url=new URL("../icons/repeat-fill.svg?v=0ccdc4397cd7c1e528c571d6ba3fb6764043d791b3de0ac86c6eaf5edb3a8ce6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
