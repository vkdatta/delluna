export const name="barn-light";
export const id="dl_8da140538cc94feeb085";
export const url=new URL("../icons/barn-light.svg?v=73b29088a6c8108a9c34f4c2db932398767fc2e987837950d78c7ac817cca35c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
