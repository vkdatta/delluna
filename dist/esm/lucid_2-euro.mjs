export const name="lucid_2-euro";
export const id="dl_7774b7fa4e6345c2b134";
export const url=new URL("../icons/lucid_2-euro.svg?v=9da9ce47ab34b4c80cbd6b0a81696a442d5ade4a98f18e1f53968d6498c6df31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
