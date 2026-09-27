export const name="house_with_shield";
export const id="dl_ee6bf3b7b158bd2f2b11";
export const url=new URL("../icons/house_with_shield.svg?v=22dba9dc4d02e0d965f9d72e5d47988a1b567650c9ab1ddb523d39ce9eb364d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
