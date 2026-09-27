export const name="brightness_6-fill";
export const id="dl_3fe7341dfc0c7b9f5feb";
export const url=new URL("../icons/brightness_6-fill.svg?v=7525a8960bd63e49e2eac1f48848678a578252e9327806070a7ddab75ecc3ee6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
