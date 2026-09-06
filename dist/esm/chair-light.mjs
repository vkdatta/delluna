export const name="chair-light";
export const id="dl_135fd56416da487d975b";
export const url=new URL("../icons/chair-light.svg?v=7fcc743ca091dc6ed85b3715f60899218eb399c5d5df16df6ca513b59c29c2f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
