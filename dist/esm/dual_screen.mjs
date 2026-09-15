export const name="dual_screen";
export const id="dl_b72b16867e324be79c9f";
export const url=new URL("../icons/D/dual_screen.svg?v=6718b2a4974ab79a34b5e76a69937de600d4c49ccb742f0402181d8a4313140e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
