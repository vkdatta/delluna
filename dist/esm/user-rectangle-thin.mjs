export const name="user-rectangle-thin";
export const id="dl_dfea07fbfe144054adca";
export const url=new URL("../icons/U/user-rectangle-thin.svg?v=8cac223026774cb0662263df1063d1fdf49e468e6192f80dd77ee26d9e9b8142",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
