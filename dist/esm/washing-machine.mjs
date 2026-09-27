export const name="washing-machine";
export const id="dl_151fb4a6c59079870a6a";
export const url=new URL("../icons/washing-machine.svg?v=cfeaac29ad1cf151deb0812362df6ccd06d0528a404c2debf24e5d3e884e3393",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
