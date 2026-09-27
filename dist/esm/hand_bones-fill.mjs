export const name="hand_bones-fill";
export const id="dl_e4b379429510ee7f30b9";
export const url=new URL("../icons/hand_bones-fill.svg?v=cf26d23b87cbd29943aa1ed2faa1d5c0e1d5cf3a63d1cbc287202bc8c7eeac3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
