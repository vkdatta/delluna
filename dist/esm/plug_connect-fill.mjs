export const name="plug_connect-fill";
export const id="dl_0c5113aa55321d3cbb48";
export const url=new URL("../icons/plug_connect-fill.svg?v=8bb6fb9272e9665924eada4c4a4f92a70648d6ca3bfac081e503cf59f13838ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
