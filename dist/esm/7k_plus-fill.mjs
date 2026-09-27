export const name="7k_plus-fill";
export const id="dl_24075d6901d8c1c8e7bc";
export const url=new URL("../icons/7k_plus-fill.svg?v=b915be5d2b9064e113562b4199903d22f589fb95524462317aa9588eed78c5f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
