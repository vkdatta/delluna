export const name="tab";
export const id="dl_5a2e9e14303f45bfb1dc";
export const url=new URL("../icons/tab.svg?v=9803575b5d8792b3a23d1c86d3b65cf7dcc08143823716498a97c14fdffa9369",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
