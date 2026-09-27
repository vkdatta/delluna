export const name="horse-bold";
export const id="dl_4b0031e42f214eb9838b";
export const url=new URL("../icons/horse-bold.svg?v=715c92e9a031baf146aabc4736a7c88a4836f79797bef7cd0dbdf95d3b7a1d68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
