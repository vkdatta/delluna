export const name="strategy-bold";
export const id="dl_b49d815d9d8b41fbb8d3";
export const url=new URL("../icons/S/strategy-bold.svg?v=a3d4b374501b75c44592daad2d4d967c4b0a82fb7b01278fb930e1e31cbc3104",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
