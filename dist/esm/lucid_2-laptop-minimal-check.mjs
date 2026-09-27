export const name="lucid_2-laptop-minimal-check";
export const id="dl_fe89b05419d74f879bcc";
export const url=new URL("../icons/lucid_2-laptop-minimal-check.svg?v=e9a404d3efba258181f9217f19141eb722783df2d83f188f81d1cf04ca9e94c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
