export const name="lucid_1-binoculars";
export const id="dl_2a53b2275004476cb924";
export const url=new URL("../icons/lucid_1-binoculars.svg?v=10a2d271e8dff4c7bb5e3538e08a1d7091e82765422642613cee5656c5593605",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
