export const name="lectern-duotone";
export const id="dl_d38e95756e144056a865";
export const url=new URL("../icons/lectern-duotone.svg?v=6bbf4bc23af27262e823fb6e4aa88f5cc0ff8b879d948290c1b82b8c22575aba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
