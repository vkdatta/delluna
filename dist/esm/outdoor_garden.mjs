export const name="outdoor_garden";
export const id="dl_3a29d1fbf40efb342b2a";
export const url=new URL("../icons/outdoor_garden.svg?v=367a668ceba9a0de0751dc84a9c8e4c97f3dc4cff84b57a1c99a97369df4da83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
