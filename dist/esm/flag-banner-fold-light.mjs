export const name="flag-banner-fold-light";
export const id="dl_ba5bbb86874b4330a4f9";
export const url=new URL("../icons/flag-banner-fold-light.svg?v=b60b6fec0ff7aeaea43bc053a18a311774e27c600f039c58b246910084501d40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
