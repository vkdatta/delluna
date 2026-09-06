export const name="anchor-simple-bold";
export const id="dl_236d132ac17944bdb12e";
export const url=new URL("../icons/anchor-simple-bold.svg?v=2c6570c77427aae1c79c1009cd4c310087d9c3daab29c9ad6d21d995e649691e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
