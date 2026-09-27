export const name="engine-fill";
export const id="dl_fa7090198ae84fa5b873";
export const url=new URL("../icons/engine-fill.svg?v=ab2a18b002987ad26d18e3a9bf59c6c0067095c1a40aed631e81c5d34e5a7812",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
