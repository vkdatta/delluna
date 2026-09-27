export const name="cell-signal-medium-light";
export const id="dl_1b0c878dd00649c5b603";
export const url=new URL("../icons/cell-signal-medium-light.svg?v=d9207212ea7d71015bea857a501a9c526827605e6690b1c6fd077fa052de1a68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
