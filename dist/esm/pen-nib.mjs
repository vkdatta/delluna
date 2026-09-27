export const name="pen-nib";
export const id="dl_ab6ad5fcd1874003b9a7";
export const url=new URL("../icons/pen-nib.svg?v=4ae475e92eec6f64a27fd14a17580ade0f466d5a0ca015b7f2e3f10b61f9a67a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
