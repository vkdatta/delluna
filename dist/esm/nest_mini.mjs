export const name="nest_mini";
export const id="dl_e9507db677e44e15bb1c";
export const url=new URL("../icons/N/nest_mini.svg?v=55fc7d3fd028ca152fc8f90e85d315a61270e16db7701f4a7def0ea8d3ad496e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
