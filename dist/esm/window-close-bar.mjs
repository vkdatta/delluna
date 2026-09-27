export const name="window-close-bar";
export const id="dl_68de6c82aff93450dd26";
export const url=new URL("../icons/window-close-bar.svg?v=aaa85971c800ab870e02e3664876ca6084375690c9c17366198ae168f2454ac3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
