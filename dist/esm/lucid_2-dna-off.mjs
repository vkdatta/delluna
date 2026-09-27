export const name="lucid_2-dna-off";
export const id="dl_290764e298894a0a8ce3";
export const url=new URL("../icons/lucid_2-dna-off.svg?v=b088a24e55ba2dc16f6a5c0b20a418c3498006db7550a4046e89f67dc13890ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
