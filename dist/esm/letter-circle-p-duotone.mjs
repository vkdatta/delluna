export const name="letter-circle-p-duotone";
export const id="dl_f45ee645bfa24e919caf";
export const url=new URL("../icons/letter-circle-p-duotone.svg?v=74e14966ee22e7303a4cfb168d0ded105b9c42909225750fe0876a9fea9249b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
