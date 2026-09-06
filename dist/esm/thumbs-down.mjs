export const name="thumbs-down";
export const id="dl_3da75e7629fc4d62bd1c";
export const url=new URL("../icons/thumbs-down.svg?v=7cea045f6891631d263a522c2502d51b90df0d032da952669a2ae250a4ee88b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
