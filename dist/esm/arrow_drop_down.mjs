export const name="arrow_drop_down";
export const id="dl_8bc9e6e9ce695cc666a3";
export const url=new URL("../icons/arrow_drop_down.svg?v=4c1697376f89cefae486b2f654e784f9fcc949cebbb09fc6ec95cab63899cc65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
