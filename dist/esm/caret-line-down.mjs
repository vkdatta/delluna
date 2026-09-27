export const name="caret-line-down";
export const id="dl_b568c75c45914327af1d";
export const url=new URL("../icons/caret-line-down.svg?v=fd5fa81835b5d69547e9a79907b2855efae1b6b1678f903a2eee2db924c7651a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
