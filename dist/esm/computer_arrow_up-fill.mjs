export const name="computer_arrow_up-fill";
export const id="dl_e5a52bee4449c74cb84c";
export const url=new URL("../icons/computer_arrow_up-fill.svg?v=96762b3e8737844765056876738849c2cd4bcf1a239f0ed4364c5c8dc99448dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
