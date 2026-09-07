export const name="gender-transgender-fill";
export const id="dl_542ab075fba54632a490";
export const url=new URL("../icons/gender-transgender-fill.svg?v=24d6cfb1245ef14e6b1bf5a3ed21d8900374b864c75701b25dc758dddf77e9aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
