export const name="flag-fill";
export const id="dl_07fc8313c68d47459eb7";
export const url=new URL("../icons/flag-fill.svg?v=eb435a08ff15af2a6f23f64731a9fad8cb487754f197d61f2a881b23911c8ca4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
