export const name="tag-light";
export const id="dl_71ada1f57f344f9b8ab7";
export const url=new URL("../icons/T/tag-light.svg?v=962e8da3ffb037103d6e613d8b160eb12c1402730994d4154106f1d39854c32f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
