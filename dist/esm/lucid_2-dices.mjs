export const name="lucid_2-dices";
export const id="dl_d7c4ae3a8d7a400f9c68";
export const url=new URL("../icons/lucid_2-dices.svg?v=577eca0e87087c04ddef1003a09591dbde1b63655827a7b86783b4a5f3f2e51e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
