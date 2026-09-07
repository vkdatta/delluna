export const name="number-circle-seven-thin";
export const id="dl_46fcc208133b44d2a17d";
export const url=new URL("../icons/number-circle-seven-thin.svg?v=3282fca9be89cfb8082d4c4b32c51429f442a227fcc80fb470619da69b5d83f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
