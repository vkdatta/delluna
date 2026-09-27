export const name="dice-four-duotone";
export const id="dl_332d53a0a4274f398ae7";
export const url=new URL("../icons/dice-four-duotone.svg?v=f06a6353846ef3477e28dee29b33a5fca4485693d9c4746b2eb70d1e5910c352",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
