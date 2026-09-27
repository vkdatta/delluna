export const name="arrow-bend-left-down-bold";
export const id="dl_6a607b54329446048614";
export const url=new URL("../icons/arrow-bend-left-down-bold.svg?v=296f3d25a9289e0f9b31aa3c43f29ceddbe4c51fe2c7b7a3becbdfa012b5a184",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
