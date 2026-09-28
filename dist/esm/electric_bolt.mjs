export const name="electric_bolt";
export const id="dl_d2a95c8b7324a55db29b";
export const url=new URL("../icons/electric_bolt.svg?v=ea82d4505e35a72eeed5719b359cf6d28f13a6077a5c60701ef16ae1b0816099",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
