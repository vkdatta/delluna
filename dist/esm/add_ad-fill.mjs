export const name="add_ad-fill";
export const id="dl_68547d397bcdf6d82ebf";
export const url=new URL("../icons/add_ad-fill.svg?v=53d136b8f259c93732c2cae1494498a0423f666cf44e699db91994f08ba3f86e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
