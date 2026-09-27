export const name="spiral-fill";
export const id="dl_f6ebf303f1b0abab1b62";
export const url=new URL("../icons/spiral-fill.svg?v=9fe9c67081512b4aa270dae9ee0e69cd0eac39aaf3f6e85ea2573c750629e51e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
