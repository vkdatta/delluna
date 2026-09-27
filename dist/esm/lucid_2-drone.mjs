export const name="lucid_2-drone";
export const id="dl_93760acb85584636aea1";
export const url=new URL("../icons/lucid_2-drone.svg?v=8a9423b29fe16e9fed0edc6e0f2890b4fbfb82b058ce782aca8a9e633ac0f4a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
