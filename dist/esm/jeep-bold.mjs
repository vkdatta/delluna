export const name="jeep-bold";
export const id="dl_212efe0abcb14fe6ab6d";
export const url=new URL("../icons/jeep-bold.svg?v=f031f75a1db69626317cbe606c9b1f0dbacd20371bf85273d47ef3c4bc2d294f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
