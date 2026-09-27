export const name="downhill_skiing-fill";
export const id="dl_b4ff530e1fce77852afd";
export const url=new URL("../icons/downhill_skiing-fill.svg?v=54ad44e9fceb64e4adba4ca5ff94b72484cf3db431e2eec282a36ac446488332",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
