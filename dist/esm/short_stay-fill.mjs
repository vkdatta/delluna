export const name="short_stay-fill";
export const id="dl_0cdf8ae3c96d4e34bdee";
export const url=new URL("../icons/S/short_stay-fill.svg?v=55cdc6347e398c92f23b33545b21edac4bf996e62288623679b8d30c2c13fdc7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
