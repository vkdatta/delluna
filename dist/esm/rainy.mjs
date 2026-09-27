export const name="rainy";
export const id="dl_a9ca8bda18fae54fb377";
export const url=new URL("../icons/rainy.svg?v=e32a7da528d53bee21f5c7f831fd10e8a7ffb3270d32672d8305ca15c7d9bc28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
