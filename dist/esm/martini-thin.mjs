export const name="martini-thin";
export const id="dl_1371172d1da9462e85f9";
export const url=new URL("../icons/martini-thin.svg?v=e28cf19684787adb9d9a5d41ad72b9d5d25c956aa9151252414c023fa700efc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
