export const name="chalkboard-simple-duotone";
export const id="dl_c417314fb02f4da0b7bf";
export const url=new URL("../icons/chalkboard-simple-duotone.svg?v=3c8d4b5e43eae9c2a04c96b8f920a3c40e1f825be20828b47c6648b32c889335",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
