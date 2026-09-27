export const name="hair-dryer-light";
export const id="dl_c892a51b3adc4bb0b2dc";
export const url=new URL("../icons/hair-dryer-light.svg?v=e713dfa8a61f4ca10188fe347ed4a00a87930fb05371bd4f0d34b415d31cf3ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
