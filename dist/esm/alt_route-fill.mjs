export const name="alt_route-fill";
export const id="dl_80cb1c1bd08f49da9c81";
export const url=new URL("../icons/A/alt_route-fill.svg?v=5e7a9912872066ccd9f9ccb3ee3227f599e826297eefe60c24988814b43b0513",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
