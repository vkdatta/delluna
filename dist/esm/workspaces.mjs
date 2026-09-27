export const name="workspaces";
export const id="dl_64b74f9d6c5d1c9ff0a0";
export const url=new URL("../icons/workspaces.svg?v=530dab6c219871fdaedb828fdb9eec82ec51d92e814b2b2a2631d4f6f21023c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
