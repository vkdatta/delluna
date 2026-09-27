export const name="lucid_3-ruler";
export const id="dl_f412f1d4618546a99bdf";
export const url=new URL("../icons/lucid_3-ruler.svg?v=7c8323a76cfa6548c68930f6db40b5a793801426fb616a79b30f36f6541c301f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
