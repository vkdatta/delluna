export const name="globe-x-light";
export const id="dl_64645d86730843e4afd7";
export const url=new URL("../icons/globe-x-light.svg?v=86e9fdca6ad531dac7496bfa7b775b2a1632e38ed92a9c2e8e2975c4e831934d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
