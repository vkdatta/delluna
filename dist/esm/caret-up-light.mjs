export const name="caret-up-light";
export const id="dl_3faa7eecf3a04c7cabb6";
export const url=new URL("../icons/caret-up-light.svg?v=bef96a7e17b29076d00530ebe9b04c30cedd20f166d8f4b9473d4cac3076c0aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
