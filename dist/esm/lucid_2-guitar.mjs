export const name="lucid_2-guitar";
export const id="dl_63c8daf2b0bf479484ab";
export const url=new URL("../icons/lucid_2-guitar.svg?v=f310f86315db61f1272dbe76c9c7955912781ac507913ee3ba1e5c2ad85ac786",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
