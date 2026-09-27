export const name="lucid_2-flask-round";
export const id="dl_2d69895fa12043a0aa13";
export const url=new URL("../icons/lucid_2-flask-round.svg?v=6e8f89dce97474c522f6b30e156477abe3c2e64690594cef38295be21002738c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
