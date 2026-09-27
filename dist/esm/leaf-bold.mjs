export const name="leaf-bold";
export const id="dl_238d59244da9474da85f";
export const url=new URL("../icons/leaf-bold.svg?v=9459712e7822233b5b0d7d8d464bf7d67111791d6ce8491f63fe72e15bb5db5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
