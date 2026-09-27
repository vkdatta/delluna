export const name="number-four-light";
export const id="dl_81c83a0421eb48f1bb9e";
export const url=new URL("../icons/number-four-light.svg?v=8ce5182797bf144b71c2453858e958bd12faccf8eec8fb9cb7236d85a7f836e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
