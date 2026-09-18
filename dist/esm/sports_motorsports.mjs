export const name="sports_motorsports";
export const id="dl_fc31e44d454340a1b48f";
export const url=new URL("../icons/sports_motorsports.svg?v=8c8ea4f6dcb7c5b3b6d9c4b3c1152cfc9fdac751c708466f94025ace61414f9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
