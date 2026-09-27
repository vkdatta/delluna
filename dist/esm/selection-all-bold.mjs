export const name="selection-all-bold";
export const id="dl_8c0c726224c2423d571c";
export const url=new URL("../icons/selection-all-bold.svg?v=36cbb01b201ac6ffd64a29d0945fa78b1f15afdd416c80bf6d2fb8363cece369",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
