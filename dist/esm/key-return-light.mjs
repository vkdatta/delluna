export const name="key-return-light";
export const id="dl_f3fa02088b2148fe882d";
export const url=new URL("../icons/key-return-light.svg?v=e4afb50c867b87c20d905d7d90aa63dbfd49345a38ffc9c69cf03d38b1c5e0b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
