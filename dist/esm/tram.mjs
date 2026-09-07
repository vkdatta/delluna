export const name="tram";
export const id="dl_6fca5e1031204b28a7fb";
export const url=new URL("../icons/T/tram.svg?v=ca6eaddf75676310bdd41a404f50b6ad465c2699e62c0abfc5032d6fc5d03878",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
