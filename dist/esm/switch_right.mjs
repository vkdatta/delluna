export const name="switch_right";
export const id="dl_4c45bb7d3e568b25ed77";
export const url=new URL("../icons/switch_right.svg?v=54c17db44ab30abdba1b29373a9f4c76ee6e5dba468ae9ca19d98fdb3e8ca126",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
