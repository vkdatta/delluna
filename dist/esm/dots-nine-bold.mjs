export const name="dots-nine-bold";
export const id="dl_71679cf931b044f09d8a";
export const url=new URL("../icons/dots-nine-bold.svg?v=930a06955cd2dd89bd96c7b99827b28ce6db02d6140297b80b22a9a3267f7cb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
