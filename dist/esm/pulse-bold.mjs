export const name="pulse-bold";
export const id="dl_93330a621aa547128192";
export const url=new URL("../icons/pulse-bold.svg?v=7b761a44f48ab5a45764017598562d19d35c980cf66baf3735594c7e30fe4fbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
