export const name="flex_direction";
export const id="dl_5d33d5a9a8f573307d3e";
export const url=new URL("../icons/flex_direction.svg?v=bdc731bbea7387f1c0489b3fc5daac602d8090c1cc63dff5b4852e85b4e5edb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
