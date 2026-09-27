export const name="mobile_loupe-fill";
export const id="dl_2de15f208d62ba248158";
export const url=new URL("../icons/mobile_loupe-fill.svg?v=6689c8cc937f84bdd250f2a0db8633af92c52a8aa52cc2e4e1030fbe6a1b9d0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
