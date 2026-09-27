export const name="polymer-fill";
export const id="dl_a935c2cc87a54bf71a4e";
export const url=new URL("../icons/polymer-fill.svg?v=fd210dc9fe7edbb49eb21e822a2b4d158c3f2235aff5fbe6ab6862aaecdd9207",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
