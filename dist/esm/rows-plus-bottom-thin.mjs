export const name="rows-plus-bottom-thin";
export const id="dl_2a6d6265df124663b16a";
export const url=new URL("../icons/rows-plus-bottom-thin.svg?v=4c1816aafd6f38b98f74a549d9381206c1754a1c726ea941ecc9b7a461942ad7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
