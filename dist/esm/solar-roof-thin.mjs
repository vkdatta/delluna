export const name="solar-roof-thin";
export const id="dl_ae941acdd11f205321df";
export const url=new URL("../icons/solar-roof-thin.svg?v=53eaaf6e4cb9ebb35b77be995af352c1b8969b8ca8e9b0bf23ca43ea8bccde95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
