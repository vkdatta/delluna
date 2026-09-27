export const name="fax";
export const id="dl_a165b4111a7c84b009da";
export const url=new URL("../icons/fax.svg?v=a6e395c6317a82ce80cc4b37b5635616f2838d8b427f540e5f6a8a49e2a18d7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
