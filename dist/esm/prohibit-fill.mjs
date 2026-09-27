export const name="prohibit-fill";
export const id="dl_7bb95cf84444489ba332";
export const url=new URL("../icons/prohibit-fill.svg?v=f14165e4daf984c30be516a5f975367a427980f9bab44b15a53745e5bb614da9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
