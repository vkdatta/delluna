export const name="cards-duotone";
export const id="dl_05afc6e139e246af8d14";
export const url=new URL("../icons/cards-duotone.svg?v=00edecaaae757dd7551fb4c83d4b6bc7ebace6212b04419c8dc11cf429dffb21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
