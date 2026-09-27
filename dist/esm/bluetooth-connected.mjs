export const name="bluetooth-connected";
export const id="dl_3eb2b0df33294089abd5";
export const url=new URL("../icons/bluetooth-connected.svg?v=d1b769aba7c49fa97fc658cc61f6d2d9b43e9dcc10f2c2ca1e63f9c5882a159a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
