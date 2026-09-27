export const name="rug-light";
export const id="dl_54e594140a244a4c94c4";
export const url=new URL("../icons/rug-light.svg?v=291d76fe1bed1859846ad5643aa7f80a5fad25d4773c019d57dba9fa709b7b42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
