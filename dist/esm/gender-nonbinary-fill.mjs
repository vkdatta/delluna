export const name="gender-nonbinary-fill";
export const id="dl_0b653b5417a547d0877a";
export const url=new URL("../icons/gender-nonbinary-fill.svg?v=66bf994b47108b168dc188be8e8f90b7b5a14047ba340e8ddf523ea08d96e758",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
