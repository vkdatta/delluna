export const name="sports_cricket";
export const id="dl_8ca68ef54084751c9d58";
export const url=new URL("../icons/sports_cricket.svg?v=1624d2c07e726a531208f65aa90af43f3d3a228948d7fb80e115090bc8de5463",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
