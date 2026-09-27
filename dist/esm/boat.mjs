export const name="boat";
export const id="dl_ad041c50ab184922be04";
export const url=new URL("../icons/boat.svg?v=fad5b9b7f891abaa31a6639413b4650006ea17ecaf04aa9c1340eba0165fc270",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
