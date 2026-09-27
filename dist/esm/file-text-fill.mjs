export const name="file-text-fill";
export const id="dl_37ae2e18caae41cd95de";
export const url=new URL("../icons/file-text-fill.svg?v=31d56355e41401e90bee3f2a4e7cf7ea65415db55a9895227382334910e9d444",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
