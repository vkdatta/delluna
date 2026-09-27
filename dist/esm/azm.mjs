export const name="azm";
export const id="dl_613bef7049211e7cbfc0";
export const url=new URL("../icons/azm.svg?v=2a4b278d503101c3ce97fc9c985ca2ad889df9a03a1e2c3501ba4180fc569bab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
