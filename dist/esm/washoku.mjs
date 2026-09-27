export const name="washoku";
export const id="dl_c4918a8448a824eb1239";
export const url=new URL("../icons/washoku.svg?v=b8c08b7ca7cb8bebb226749f7d3020aeb3e053e97250b6911acd9cb0b388ef40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
