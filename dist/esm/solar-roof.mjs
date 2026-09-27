export const name="solar-roof";
export const id="dl_9dd636a0aa10989bdfdb";
export const url=new URL("../icons/solar-roof.svg?v=8393c5b0289e3e6adcdeb865a1a77d496564a23fc23b51b639066d6b29b7316f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
