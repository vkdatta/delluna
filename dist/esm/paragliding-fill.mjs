export const name="paragliding-fill";
export const id="dl_9e282ff11d95e5f40eb4";
export const url=new URL("../icons/paragliding-fill.svg?v=5820b4b31933ff20c41b41302c82ea20be6b31e85ff42b2f671ee08a08024488",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
