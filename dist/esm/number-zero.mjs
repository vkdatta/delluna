export const name="number-zero";
export const id="dl_4ce6867c8a8545d9a496";
export const url=new URL("../icons/number-zero.svg?v=7f66dddee5da2ce94d5bd096cac885d8b29e4ff16514052f95716fa6ffed47e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
