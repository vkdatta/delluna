export const name="print_add";
export const id="dl_d347d3b4cf97d47a4181";
export const url=new URL("../icons/print_add.svg?v=7f3fcf5f6468a473fda0463c52eb6d0271537d2b34993865ec45bacb9a6ee6c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
