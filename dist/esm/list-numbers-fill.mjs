export const name="list-numbers-fill";
export const id="dl_a0431a3d3d7648b681ee";
export const url=new URL("../icons/list-numbers-fill.svg?v=57da8719783e7de056bab3591151ff328854c3ed463ffc7e1c79b271ed617b87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
