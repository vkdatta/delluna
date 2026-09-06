export const name="car-profile-thin";
export const id="dl_295f9a0da1384fba8c1e";
export const url=new URL("../icons/car-profile-thin.svg?v=39b14ba7078f94dd7cf1b96ddd0f0204b1d489a216f6b9f0a916dd53c35a2056",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
