export const name="subtitles-bold";
export const id="dl_84462e35f90345ef9599";
export const url=new URL("../icons/S/subtitles-bold.svg?v=f9c98434e2fc3080be247f5e636ec661f80a8ed35d5d8ef00a53c54cdf3a9b85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
