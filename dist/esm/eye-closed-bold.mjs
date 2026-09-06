export const name="eye-closed-bold";
export const id="dl_872aba0139004478a739";
export const url=new URL("../icons/eye-closed-bold.svg?v=a4dc4a04799c399fed2cd4ed000f0b9c282d0ed6f112aab4cd3601e5efcfbe1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
