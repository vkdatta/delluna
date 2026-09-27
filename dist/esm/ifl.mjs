export const name="ifl";
export const id="dl_2172bd64cdae70cc2f37";
export const url=new URL("../icons/ifl.svg?v=cfb74088ed909552921c27807bb2601ef7262e6ffb944622ad112e62660ef9e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
