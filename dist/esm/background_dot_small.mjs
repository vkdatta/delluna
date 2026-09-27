export const name="background_dot_small";
export const id="dl_d875685a6898450a463e";
export const url=new URL("../icons/background_dot_small.svg?v=8f5bf90b99dbf065ee5db27739b29b69a8e06b270021e71c5b0d28079c7eb2a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
