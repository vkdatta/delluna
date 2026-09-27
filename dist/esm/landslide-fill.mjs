export const name="landslide-fill";
export const id="dl_cceb8954d7a646b0014f";
export const url=new URL("../icons/landslide-fill.svg?v=d85ff5b6a2d65e6914d4fdf6ef2e70d8b4e5b0cf40e8ada4cb7c5ffa613f0eb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
