export const name="command-light";
export const id="dl_89df09f71b7147f99e3a";
export const url=new URL("../icons/command-light.svg?v=4521ec0069db5074812e992501652031830b24b39b791ea8e6e8445687777c2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
