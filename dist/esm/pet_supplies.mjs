export const name="pet_supplies";
export const id="dl_a4632e3efc8346ad8c77";
export const url=new URL("../icons/pet_supplies.svg?v=4e8d655f406ccb075316621325c4a055578f36a1db610a9bc2a17e0c1dd99db8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
