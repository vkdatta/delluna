export const name="tally-5";
export const id="dl_8d99c949c39e4af6b4b6";
export const url=new URL("../icons/tally-5.svg?v=624d3ebb53e534dbae229574992d8246727abdb6bd3c949bf4aae7ada8adffc5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
