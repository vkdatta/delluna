export const name="currency-kzt-thin";
export const id="dl_b8c77104dd4d4e7b823f";
export const url=new URL("../icons/currency-kzt-thin.svg?v=c7dc9e4683b01623d1d56f7fe25682a52c33b9c25d62a14fd2d163c7fff10b7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
