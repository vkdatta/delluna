export const name="dropdown-fill";
export const id="dl_5e2ab687f06448648a0f";
export const url=new URL("../icons/D/dropdown-fill.svg?v=41c1952ce110d2b872f6a092dc8520d3e7c81861117bc0f0270618499e4c15f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
