export const name="chair-light";
export const id="dl_135fd56416da487d975b";
export const url=new URL("../icons/chair-light.svg?v=d754b4d6b39bbb8fc9bf73de22da79d6fa4dabb5c9f4662e90143b10e308e445",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
