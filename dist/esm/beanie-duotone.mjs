export const name="beanie-duotone";
export const id="dl_94bb09d63c954699ad54";
export const url=new URL("../icons/beanie-duotone.svg?v=0315a6a151e837c88418952f8cb9a4dfb2c51ad96164ada25d3a0de0f4b95eb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
