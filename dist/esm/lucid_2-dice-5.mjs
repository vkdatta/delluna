export const name="lucid_2-dice-5";
export const id="dl_6324d3606f534fbea30c";
export const url=new URL("../icons/lucid_2-dice-5.svg?v=aa55043724c1e9e312e9f3308aa4af841cfec315543afd7f65c81bb7083e617a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
