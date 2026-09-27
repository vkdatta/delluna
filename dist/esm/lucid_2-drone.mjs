export const name="lucid_2-drone";
export const id="dl_93760acb85584636aea1";
export const url=new URL("../icons/lucid_2-drone.svg?v=98594a81045762174f598dc8cbd92442a4c1f74f17836d03a32bec665c9d20b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
