export const name="brightness_1-fill";
export const id="dl_0288de06cdb9712a688a";
export const url=new URL("../icons/brightness_1-fill.svg?v=f795538fa59d8def3a5688d26df2590a12139734eab529b877d45314805a3ada",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
