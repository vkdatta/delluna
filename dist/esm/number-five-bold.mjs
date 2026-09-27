export const name="number-five-bold";
export const id="dl_9d026d0d8d5d4643b2b5";
export const url=new URL("../icons/number-five-bold.svg?v=fdf69e802a6043000d21201eabc58bde29ec83b83feca699733d382d2ad28ccc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
