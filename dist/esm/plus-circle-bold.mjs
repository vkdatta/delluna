export const name="plus-circle-bold";
export const id="dl_9067c8fdb2de416cafad";
export const url=new URL("../icons/plus-circle-bold.svg?v=5b8db77da2f6db8a9b12096bc4c18d4c8d36100d3f47b2685941fbbcdce4a94f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
