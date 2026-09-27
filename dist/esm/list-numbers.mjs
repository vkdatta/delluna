export const name="list-numbers";
export const id="dl_0707a65e88444558a9cb";
export const url=new URL("../icons/list-numbers.svg?v=31671692c054f2537078ae133551df91efbe10729e61053c85972906d816defa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
