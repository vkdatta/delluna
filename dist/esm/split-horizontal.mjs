export const name="split-horizontal";
export const id="dl_de964bc26adcb75c78c3";
export const url=new URL("../icons/split-horizontal.svg?v=6ec54287c5893ee60e8bd22f654544f06c9cb879a5eaf47fbd92a159049b9682",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
