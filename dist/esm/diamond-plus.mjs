export const name="diamond-plus";
export const id="dl_2c44ce7a532549248bbc";
export const url=new URL("../icons/add/diamond-plus.svg?v=2ab65295edf2b7369e0e5af0a6dc23c67cce81dd5656ef9cc35191a852d826c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
