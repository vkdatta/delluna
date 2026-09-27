export const name="fish";
export const id="dl_5eb4f657729642dca218";
export const url=new URL("../icons/fish.svg?v=3a73b1d55cc3648f89a4648c71e1f16ba9af1990f75b69378db1c89ed2efec41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
