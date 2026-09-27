export const name="lucid_3-shield-ban";
export const id="dl_185d954e3cd546af8803";
export const url=new URL("../icons/lucid_3-shield-ban.svg?v=2ce6cbf31ed3e4bade06bba438d128b17f5611406332de42a42a888d62743f23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
