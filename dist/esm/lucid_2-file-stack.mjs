export const name="lucid_2-file-stack";
export const id="dl_d6d604b534cb44bb8362";
export const url=new URL("../icons/lucid_2-file-stack.svg?v=731fe21f855ea914fa69770f4be8d7f98e98fecfc9e04d2034d873fe39e68150",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
