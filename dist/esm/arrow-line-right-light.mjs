export const name="arrow-line-right-light";
export const id="dl_d3500129f3e448d0a42a";
export const url=new URL("../icons/arrow-line-right-light.svg?v=5e38ffaecbecda871f617e9bdec8150e6c6318390fdc0b64b6b575b9e1c20626",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
