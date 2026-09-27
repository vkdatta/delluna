export const name="lucid_2-lamp-wall-down";
export const id="dl_fe975e6379134dbcb1b8";
export const url=new URL("../icons/lucid_2-lamp-wall-down.svg?v=2f121222a9d378df82b315511c02b4fa5184bdd8a9c2d7bb4c2a05dd807adaeb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
