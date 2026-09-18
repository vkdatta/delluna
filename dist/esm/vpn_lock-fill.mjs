export const name="vpn_lock-fill";
export const id="dl_a86a0179a2864d3ea240";
export const url=new URL("../icons/vpn_lock-fill.svg?v=866225481222d4c9b9e4fd5555361fe73edec2f9de2655f0edb53cd0b59201b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
