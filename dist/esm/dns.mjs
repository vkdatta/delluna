export const name="dns";
export const id="dl_9caeb5050f96422c86a3";
export const url=new URL("../icons/D/dns.svg?v=b3a627c2d505121f076fc23409012f478ac75db098ffeedbf80b2f1bed3adf0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
