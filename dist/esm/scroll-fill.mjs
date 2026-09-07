export const name="scroll-fill";
export const id="dl_c3e6dccec8d3422aa085";
export const url=new URL("../icons/S/scroll-fill.svg?v=a858518b53e8757e9cee94aa4cb806decbc2a77c78a349f8ae70ab7c68ca1dbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
