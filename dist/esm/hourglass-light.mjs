export const name="hourglass-light";
export const id="dl_8141f45d88a840d3ad5a";
export const url=new URL("../icons/hourglass-light.svg?v=4019c6c1de76df1ea7a5cc61faf080fd86abe28707e65d4cc84385a6e96b670e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
