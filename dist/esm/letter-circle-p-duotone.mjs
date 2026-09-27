export const name="letter-circle-p-duotone";
export const id="dl_f45ee645bfa24e919caf";
export const url=new URL("../icons/letter-circle-p-duotone.svg?v=a969e9bd656dd3152d4ee31803bf911d288bf058d833f8a41ec37dcdb3e84b93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
