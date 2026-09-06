export const name="arrows-in-light";
export const id="dl_1b940b34dde1457a8463";
export const url=new URL("../icons/arrows-in-light.svg?v=fb27fe30768c6977afb8afc4b899ab5aba1ae2e54a52dc79afc0d7088a7af422",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
