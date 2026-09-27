export const name="robot-fill";
export const id="dl_a494afbca3b64830ab4d";
export const url=new URL("../icons/robot-fill.svg?v=3ead383583a9e0a2a4f25e5bfc9925d085996f8ec366a601fd8424a0ea2cfd4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
