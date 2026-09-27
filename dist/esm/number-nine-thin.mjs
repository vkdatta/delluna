export const name="number-nine-thin";
export const id="dl_33fd5542c0104dd492d2";
export const url=new URL("../icons/number-nine-thin.svg?v=24f5909703e0e9346c44a80fce508a2337d9b170be6f51f60593b8498dd25f28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
