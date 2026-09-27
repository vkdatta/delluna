export const name="simulation";
export const id="dl_49db63ae9c47466a2db9";
export const url=new URL("../icons/simulation.svg?v=e1b3bd6aa5600bc9bb990a98c8f4c4ede2a8b5c020db1459dacd5f5684b3f16e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
