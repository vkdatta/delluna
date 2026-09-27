export const name="today";
export const id="dl_49e8c2433e708de28949";
export const url=new URL("../icons/today.svg?v=f7fcf2fc16468a502bffb178294c250fd84ef50f20495493eee33181164cb07f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
