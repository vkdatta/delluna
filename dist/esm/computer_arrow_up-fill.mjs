export const name="computer_arrow_up-fill";
export const id="dl_e207c135aa9a4eca90dc";
export const url=new URL("../icons/computer_arrow_up-fill.svg?v=0dcaf2b9eeb52c1afe85641914f48beb30367a8352a1d75a3ad17d1dad7800bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
