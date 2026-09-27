export const name="variable_remove";
export const id="dl_b1bc441759e5ef7dffe8";
export const url=new URL("../icons/variable_remove.svg?v=777d0728a3a3fbae5dad63b43681963b1d6606057b3fcd89cb1567f29a7cc13b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
