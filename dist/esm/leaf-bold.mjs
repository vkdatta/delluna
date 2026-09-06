export const name="leaf-bold";
export const id="dl_238d59244da9474da85f";
export const url=new URL("../icons/leaf-bold.svg?v=b73eb34e1605c5de6f5678dca7a141c69b956056958c0e46672ab96842d25dfd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
