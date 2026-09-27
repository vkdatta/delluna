export const name="sports_mma-fill";
export const id="dl_7f5863c7903a4995bf6a";
export const url=new URL("../icons/sports_mma-fill.svg?v=977d448c532ceeb2c5cfd101d6aa3de8f288aa4b3de76602a00d7db721c24f8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
