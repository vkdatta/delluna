export const name="oven-bold";
export const id="dl_0ca38e01c61648eca202";
export const url=new URL("../icons/oven-bold.svg?v=41010a8a98d9ab97d3fd477ac6f8d57fc76747df9007b85b2939c05e9c99fdb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
