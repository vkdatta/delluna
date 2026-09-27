export const name="1k_plus";
export const id="dl_0b9a1c6a98a5ca2ebad3";
export const url=new URL("../icons/1k_plus.svg?v=b854d4a023a3da4d5867aaeac70384598314d766102422a3f4884073184a761e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
