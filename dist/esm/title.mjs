export const name="title";
export const id="dl_c53b6a5e5abe71c758bf";
export const url=new URL("../icons/title.svg?v=cdafc0e5b0a017d6a26a2e3f6c992223ffcb652880836b0e44c6d710c82d9220",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
