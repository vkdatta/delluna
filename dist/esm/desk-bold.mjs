export const name="desk-bold";
export const id="dl_861507f2856e4b70b807";
export const url=new URL("../icons/desk-bold.svg?v=8ebca84eb5b5b6e519a51e3bf1eb6e22dd982f32374e68ed76f79d74b4545d91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
