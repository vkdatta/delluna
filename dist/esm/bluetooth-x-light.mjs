export const name="bluetooth-x-light";
export const id="dl_0ba5520139804699bc37";
export const url=new URL("../icons/bluetooth-x-light.svg?v=6e1592df087001194c8b793f7770b93ff79f012a929ff6fd951b61d45497de53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
