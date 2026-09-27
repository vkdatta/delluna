export const name="solar-roof-bold";
export const id="dl_39169584e151c42ce3e0";
export const url=new URL("../icons/solar-roof-bold.svg?v=9b86176e49361ec20e872b7d1ca938aa0fdeb1093726b32d1fc4f37d192a489a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
