export const name="desktop_landscape_add-fill";
export const id="dl_7f167d3b742bcbef8b17";
export const url=new URL("../icons/desktop_landscape_add-fill.svg?v=48d6ae47023456c68f61e634d8d82d9af9290ac5e339b88e48ed4d7534c16904",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
