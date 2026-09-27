export const name="claude";
export const id="dl_33fe224229e99f5a2c39";
export const url=new URL("../icons/claude.svg?v=d2fe2bf2299f3c1bc2b89d298c0c4bdcb7ca8e2864cb6705cc4edf4305fc7661",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
