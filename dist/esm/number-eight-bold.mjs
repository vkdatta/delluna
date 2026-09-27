export const name="number-eight-bold";
export const id="dl_607b97efe0d8499daa5b";
export const url=new URL("../icons/number-eight-bold.svg?v=b3f3172b142497c7828cb44b617bbbafa4271619aeace21d6c4623517d0639ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
