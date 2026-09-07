export const name="arrow-square-down-left-bold";
export const id="dl_6a8b647217794533920a";
export const url=new URL("../icons/arrow-square-down-left-bold.svg?v=1612949594e9b8579f31f629a59046691ed31bd5752aed085b59ed7a126ef80a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
