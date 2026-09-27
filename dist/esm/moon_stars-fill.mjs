export const name="moon_stars-fill";
export const id="dl_603b2233944e036fc021";
export const url=new URL("../icons/moon_stars-fill.svg?v=3ca252dbe240c0ddaaa98689a678f45cfd7dade9d05f174d1218c0ff77113a2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
