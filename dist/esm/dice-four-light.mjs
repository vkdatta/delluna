export const name="dice-four-light";
export const id="dl_ce89acfdde9c4f9891b3";
export const url=new URL("../icons/dice-four-light.svg?v=465744beb2f527a448ec81a112f9b9e7d065576c4fa95a084b9195679bc54634",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
