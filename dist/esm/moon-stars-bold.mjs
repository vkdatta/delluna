export const name="moon-stars-bold";
export const id="dl_ca8def4f732142ee8267";
export const url=new URL("../icons/moon-stars-bold.svg?v=94cfcfde80b0a7b0b1b437335c9c53fec648c593213131e0961f7e5e08d42d69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
