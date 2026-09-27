export const name="flying-saucer";
export const id="dl_58b4c65526d0425b9c2c";
export const url=new URL("../icons/flying-saucer.svg?v=4e132bde8b353b165fc9d0f46d6e7e047d9f4e479caf15e42ee498a4039956c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
