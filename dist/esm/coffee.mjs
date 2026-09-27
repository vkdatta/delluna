export const name="coffee";
export const id="dl_cd573d274d93458f9ed2";
export const url=new URL("../icons/coffee.svg?v=f3127d4cb9d3b45eb41b48f86ed85a77bc0cb563c37ce8d13c90c4b072808c75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
