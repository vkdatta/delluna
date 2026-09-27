export const name="number-square-nine-light";
export const id="dl_de8ceffdf7b34907a9e6";
export const url=new URL("../icons/number-square-nine-light.svg?v=cda765b5c7972300c1dc62f4cd676bf580b3816b5a41716b78d5b78b37b49cf1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
