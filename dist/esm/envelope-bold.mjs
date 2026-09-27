export const name="envelope-bold";
export const id="dl_e408f9b0b47b4f38a4bb";
export const url=new URL("../icons/envelope-bold.svg?v=67062439639144b85467d2c5270b12193ab4a7a6543810e35dae5eabfe19a4a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
