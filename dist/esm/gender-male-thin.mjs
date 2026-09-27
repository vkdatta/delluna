export const name="gender-male-thin";
export const id="dl_d16048be3f0b4363a386";
export const url=new URL("../icons/gender-male-thin.svg?v=22d3a95268bc06fdd0745b29830fb3c433d93ed053da326f6b6ce63e1382f46c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
