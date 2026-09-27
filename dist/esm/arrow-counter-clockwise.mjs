export const name="arrow-counter-clockwise";
export const id="dl_24e97a7fd39945cba46c";
export const url=new URL("../icons/arrow-counter-clockwise.svg?v=699cd6da15f90e0bbb207fd7af597ad00bcb4ec9492d5a2374e8eedcc61da231",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
