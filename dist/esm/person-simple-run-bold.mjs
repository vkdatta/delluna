export const name="person-simple-run-bold";
export const id="dl_b8846ba6eb314ecdabbc";
export const url=new URL("../icons/person-simple-run-bold.svg?v=b2142b6cf9b3f1a61871b14334415a10070827917027164034ce4174deb79a67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
