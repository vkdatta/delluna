export const name="person-simple";
export const id="dl_24f3653a08064038a789";
export const url=new URL("../icons/person-simple.svg?v=19719b89b6fe44c3d99854529470bda1f58ab3d09a83c521d6caf661aa900b3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
