export const name="coffee_maker";
export const id="dl_81a1ea54b1cff4a1e2a0";
export const url=new URL("../icons/coffee_maker.svg?v=4ed0eb19980c388276729e42e2a5cafbca3ac284a9347412080b12ceb58ef932",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
