export const name="hamburger-duotone";
export const id="dl_680d999619974fcd8fdc";
export const url=new URL("../icons/hamburger-duotone.svg?v=e43b112ed7de439328cddfa0847fe61c59688aa0379245306c80d13f0868001d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
