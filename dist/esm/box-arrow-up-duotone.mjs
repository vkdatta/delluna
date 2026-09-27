export const name="box-arrow-up-duotone";
export const id="dl_b04d2cf7153f45dab04d";
export const url=new URL("../icons/box-arrow-up-duotone.svg?v=ee8c45bc768f6f6c67ce2563ad166c4893d6790229d52a3b0ee69f24649be102",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
