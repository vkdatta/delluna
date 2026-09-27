export const name="shield-check-light";
export const id="dl_91fc4a8cdaf954fec281";
export const url=new URL("../icons/shield-check-light.svg?v=849c9a2168a51dfa9ffbdd4e9622b9d8493d5b33aab054534006bda10f8c56f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
