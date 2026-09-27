export const name="phone-outgoing-light";
export const id="dl_7d9c69b495b141da8e54";
export const url=new URL("../icons/phone-outgoing-light.svg?v=2ecdf6cf3cf0cc4527d7b61b0202c03312be641cc8e3cec695063843c39f3d01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
