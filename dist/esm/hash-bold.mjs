export const name="hash-bold";
export const id="dl_af95fa491c2149f5a20d";
export const url=new URL("../icons/hash-bold.svg?v=f6f7599bfab5336123217752f449816a684521e3c8e7e32f9ee4ac68dfc236d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
