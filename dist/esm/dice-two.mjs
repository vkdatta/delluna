export const name="dice-two";
export const id="dl_79b3e2f3977a4e52aacb";
export const url=new URL("../icons/dice-two.svg?v=6100db595d865f660719d8206e10044acea2cf85625390da471cae816f098dbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
