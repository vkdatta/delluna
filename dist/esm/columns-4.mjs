export const name="columns-4";
export const id="dl_64291c1a3e364d5ca84f";
export const url=new URL("../icons/columns-4.svg?v=4226b95854fa395ec5a887ceb5e3ee0f47395ca53303b404a726e3cfa13a28ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
