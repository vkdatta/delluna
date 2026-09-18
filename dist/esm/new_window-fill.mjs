export const name="new_window-fill";
export const id="dl_9795ec103add4ec2b4ec";
export const url=new URL("../icons/N/new_window-fill.svg?v=0e913aaa723635b045533e8ebdf08d7967d6be2bb5b5dcf16cb1c6f90f4b40b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
