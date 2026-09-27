export const name="facebook-logo-thin";
export const id="dl_f0ac26078e7c4594b636";
export const url=new URL("../icons/facebook-logo-thin.svg?v=cbdd5cee583a7ba5590e8124f071df94d7ffe9f538f35fde0ee00d08e3fbdc89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
