export const name="vacuum_2-fill";
export const id="dl_9198ba504dab6307a08b";
export const url=new URL("../icons/vacuum_2-fill.svg?v=d2fe6ffaf1cf9e367a7b8e7b6bb08ffe7dca9dddad87614d3fe92ea2bc4881a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
