export const name="splitscreen_landscape";
export const id="dl_fdc3f6fcc30fc37b51bc";
export const url=new URL("../icons/splitscreen_landscape.svg?v=d5c3f0dbe1dfa430074ead6e2286820491432d0be03f71ad861063ad43a6a2c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
