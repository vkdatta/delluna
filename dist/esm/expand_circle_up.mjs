export const name="expand_circle_up";
export const id="dl_5ceadc4eacfbf4cf2fea";
export const url=new URL("../icons/expand_circle_up.svg?v=41e4a5cc0bc2f3b8e6dadbaacc5d7635ce1aa9dd0cbcfb558a881773cdef9426",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
