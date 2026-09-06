export const name="person-simple-ski-duotone";
export const id="dl_67b7f0c6cdf34e85a538";
export const url=new URL("../icons/person-simple-ski-duotone.svg?v=ae45ea6402459d766e1cc446fa8efb2cdedd71be778865640abf9ee5beb58c1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
