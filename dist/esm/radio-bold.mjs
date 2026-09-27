export const name="radio-bold";
export const id="dl_891b34656499458ab628";
export const url=new URL("../icons/radio-bold.svg?v=41c1884870f8468ee54db6abe352081087ac5a67db8b8a5367b8defee8dc8a7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
