export const name="cheese";
export const id="dl_583ad7eec0b24a7781d2";
export const url=new URL("../icons/cheese.svg?v=576fd2034cd2d66b22e2336f37a0256b90dc764bacd797b0511cf829aeaaf51a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
