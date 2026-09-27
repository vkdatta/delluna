export const name="caret-double-right-fill";
export const id="dl_ecc2c9c7d4e8497bbc78";
export const url=new URL("../icons/caret-double-right-fill.svg?v=a3acce72510af977ecccc73ed11238368809b96f02d970973cdcdabd67ce372e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
