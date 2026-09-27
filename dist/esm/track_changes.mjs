export const name="track_changes";
export const id="dl_c4efea10f5d1c1afd570";
export const url=new URL("../icons/track_changes.svg?v=1e3c8c589f7be2d8f9d07e25d99054084809da0e56e484ac0951690b04abeb46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
