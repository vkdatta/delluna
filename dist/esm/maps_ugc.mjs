export const name="maps_ugc";
export const id="dl_f4eea078ddb540f29d04";
export const url=new URL("../icons/M/maps_ugc.svg?v=650eaba4f97098822b96c9635627a84bd9642d9fbd7a3b811eeedad33425a861",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
