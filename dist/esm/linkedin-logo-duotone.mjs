export const name="linkedin-logo-duotone";
export const id="dl_9efa49a9533d468e8be9";
export const url=new URL("../icons/linkedin-logo-duotone.svg?v=9995c0306af435cf01c51ca7b5eb5066c112ba6415bdeff70959a3a1da69bc46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
