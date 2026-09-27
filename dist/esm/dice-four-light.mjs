export const name="dice-four-light";
export const id="dl_ce89acfdde9c4f9891b3";
export const url=new URL("../icons/dice-four-light.svg?v=be0f72365e74ab58088ec96a867ef3b03fd81e815338ba67cb61ece63b88c7fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
