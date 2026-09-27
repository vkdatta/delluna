export const name="lucid_1-binoculars";
export const id="dl_2a53b2275004476cb924";
export const url=new URL("../icons/lucid_1-binoculars.svg?v=394ccb266157032acc3254be4ba6f37bfad797b50db4ee242da3833151fe86d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
