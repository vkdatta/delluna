export const name="autopause-fill";
export const id="dl_e9fd868f0bd5b55d12cb";
export const url=new URL("../icons/autopause-fill.svg?v=9f7fe9ebee204a47a3f8db6a8c3fdafc460f4d3b4804bc3b7e7371872118cfc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
