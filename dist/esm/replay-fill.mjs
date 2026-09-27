export const name="replay-fill";
export const id="dl_1c0b43d4b66798a22833";
export const url=new URL("../icons/replay-fill.svg?v=c30e978d91bfbd89bce20cd76fa66a4d317732c7fb80a7ac0b5b4517c7692876",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
