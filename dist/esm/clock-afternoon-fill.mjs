export const name="clock-afternoon-fill";
export const id="dl_1eebdb5161b845db8908";
export const url=new URL("../icons/clock-afternoon-fill.svg?v=c7c2a1878826e426fad95dd9f068ced2bb48de2ed6a72b6b3645753ef6e5d375",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
