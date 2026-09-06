export const name="hamburger-duotone";
export const id="dl_680d999619974fcd8fdc";
export const url=new URL("../icons/hamburger-duotone.svg?v=820d43ebfd3a3e0e7d1cc8b1f3b858fab89b838161d3f72f380599766e24a0ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
