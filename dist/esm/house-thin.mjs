export const name="house-thin";
export const id="dl_4cc4a245049744e1bd33";
export const url=new URL("../icons/house-thin.svg?v=04449d601cfa41dc75c6414f82cabca52dbf528d6376013d1c88e4ba4b7c11e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
