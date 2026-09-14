export const name="arrows_more_down-fill";
export const id="dl_b5d23831f6e44de3a141";
export const url=new URL("../icons/A/arrows_more_down-fill.svg?v=fe7f2a7474fca59f9d084478009b8cfc0710aca0b37a390e1e67be98f1497315",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
