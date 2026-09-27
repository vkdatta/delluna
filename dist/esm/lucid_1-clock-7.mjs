export const name="lucid_1-clock-7";
export const id="dl_7f13a88493bf4bdba966";
export const url=new URL("../icons/lucid_1-clock-7.svg?v=a5c7c3221f79d71995eed2b5d0ae14466e08cbae35b1ab6238181b378f006eb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
