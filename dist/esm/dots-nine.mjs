export const name="dots-nine";
export const id="dl_63f60dfa52b847ed8af0";
export const url=new URL("../icons/dots-nine.svg?v=fdc9578fde8c82d0fbf9824025190aaadc1e7c6352accac87f2fae5ff1def5d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
