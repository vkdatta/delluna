export const name="check_in_out-fill";
export const id="dl_d33fe2accd5443e699da";
export const url=new URL("../icons/check_in_out-fill.svg?v=8cd3c750938375bf078619d852645f53cdefe21372c237648ac29d3fb96ae592",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
