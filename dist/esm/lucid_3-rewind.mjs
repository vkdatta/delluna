export const name="lucid_3-rewind";
export const id="dl_64836b39f2124ed2b9a8";
export const url=new URL("../icons/lucid_3-rewind.svg?v=20c8fceb3f3ba89bffc704955e312f1e25a7d26f688f4d837abca197b15008ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
