export const name="sim-card";
export const id="dl_0ec8afbf07497e26186f";
export const url=new URL("../icons/sim-card.svg?v=836ff2a65e0c2d5fdb8bdd0ffb26a874f907fa418310312d58d1bc511678efc9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
