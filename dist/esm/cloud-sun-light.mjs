export const name="cloud-sun-light";
export const id="dl_cfcc74886e294260a7ec";
export const url=new URL("../icons/cloud-sun-light.svg?v=bb60a1d81eee07c39120ce6e01205d663921e58070d9e751dbd4df9749ef6d4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
