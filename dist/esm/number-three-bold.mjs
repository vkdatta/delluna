export const name="number-three-bold";
export const id="dl_b1e59941997f4c579986";
export const url=new URL("../icons/number-three-bold.svg?v=a985d5c182f3b493f4a2c3f72fb81b1d878109b1ce1d776641c75c8f3b76e47e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
