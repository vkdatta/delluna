export const name="bottom_drawer";
export const id="dl_12ed41ad2a0602f30e57";
export const url=new URL("../icons/bottom_drawer.svg?v=eadcb6c578c74af6c13631972aa3a229eb7cd734ccb08037a7b1b44e23e47c26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
