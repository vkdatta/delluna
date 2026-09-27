export const name="solar-roof-light";
export const id="dl_81354b1066eb979ea74b";
export const url=new URL("../icons/solar-roof-light.svg?v=95b70e83036c1d7820656e7a30c44ce289226227194e8f023e082a786c924753",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
