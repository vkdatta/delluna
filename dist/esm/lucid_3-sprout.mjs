export const name="lucid_3-sprout";
export const id="dl_e97635c1778e4ea09704";
export const url=new URL("../icons/lucid_3-sprout.svg?v=7cca3af34441b40c5163af981b90121d6d9cf6cc28f00899c204493916de0c34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
