export const name="tab_unselected-fill";
export const id="dl_de3a93f15612586d694f";
export const url=new URL("../icons/tab_unselected-fill.svg?v=55ac18c528648da5a04779128c0c72957ec12bd8f5facb859fb9ece917103595",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
