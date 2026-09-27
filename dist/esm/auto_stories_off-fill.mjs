export const name="auto_stories_off-fill";
export const id="dl_d2b784e4dceae66b02d6";
export const url=new URL("../icons/auto_stories_off-fill.svg?v=76eb749255497f548cb021120404f62441de7d77f3de1ad525a64d3436eb9726",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
