export const name="not_listed_location-fill";
export const id="dl_10cc74b0e2aba27d4897";
export const url=new URL("../icons/not_listed_location-fill.svg?v=a445f83760c474f334d8eecc81397cc0c7721a222c641416940bf81abbe5ce62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
