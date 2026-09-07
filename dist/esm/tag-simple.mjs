export const name="tag-simple";
export const id="dl_a503868fb53d4514be14";
export const url=new URL("../icons/T/tag-simple.svg?v=1b9ede588c884a62fde579e261a9b7043363de87b38bad6e2d540b808db9a01c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
