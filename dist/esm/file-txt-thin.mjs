export const name="file-txt-thin";
export const id="dl_06b73ee8bbf641e4890a";
export const url=new URL("../icons/file-txt-thin.svg?v=44f19eeefd0ee316ebacf2d89bcd2f44a83947bf77ae8a97cdcf5e660b1a863b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
