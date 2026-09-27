export const name="ink_highlighter";
export const id="dl_4a36c88051948c90dc84";
export const url=new URL("../icons/ink_highlighter.svg?v=da48083e63736a2124f475155d5ae3542e06d6f846a6271373fdc152c5a75617",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
