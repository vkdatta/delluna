export const name="hospital-duotone";
export const id="dl_7cc6c610acaa45c5b7e1";
export const url=new URL("../icons/hospital-duotone.svg?v=000f87fe41ad43d60eb063194cd7b4d335ac4eb54a9ea8f734c6152191914607",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
