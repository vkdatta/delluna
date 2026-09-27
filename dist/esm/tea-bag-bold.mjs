export const name="tea-bag-bold";
export const id="dl_a4ce091e9fc88b7ddef7";
export const url=new URL("../icons/tea-bag-bold.svg?v=ada462f123555e4f4bd0f0cb3ae72f65039a2aef693e9b63dd08581f2ed7e584",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
