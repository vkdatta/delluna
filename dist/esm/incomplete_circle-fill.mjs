export const name="incomplete_circle-fill";
export const id="dl_f7dbbf7c14333c1ee9a2";
export const url=new URL("../icons/incomplete_circle-fill.svg?v=abafd619f6a8ee342b43bda69f92489689c8fca0af2b7e5c20f37f88aba35f42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
