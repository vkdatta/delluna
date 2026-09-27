export const name="club-fill";
export const id="dl_5b16b75605cd43e79749";
export const url=new URL("../icons/club-fill.svg?v=3aae59b11da3364428ef148244ada111b2e58ec0c47b43a5da7f3440b096bbc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
