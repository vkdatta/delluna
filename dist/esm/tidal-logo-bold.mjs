export const name="tidal-logo-bold";
export const id="dl_9e363d62c3424e248faa";
export const url=new URL("../icons/T/tidal-logo-bold.svg?v=b30a35624078be9124a1067008afbb3131067fa4e3341ee7a0c1e904b1d65a72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
