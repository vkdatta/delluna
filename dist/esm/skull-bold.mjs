export const name="skull-bold";
export const id="dl_58deaf8bbff79dd2367d";
export const url=new URL("../icons/skull-bold.svg?v=e773d71cd60e8a2285aa5d14b62ae9f2e69682dfc6f2d17f711fc02f77435a4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
