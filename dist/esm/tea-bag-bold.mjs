export const name="tea-bag-bold";
export const id="dl_fb828603639644eb9e87";
export const url=new URL("../icons/T/tea-bag-bold.svg?v=ada462f123555e4f4bd0f0cb3ae72f65039a2aef693e9b63dd08581f2ed7e584",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
