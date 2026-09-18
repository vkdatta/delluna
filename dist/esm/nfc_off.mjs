export const name="nfc_off";
export const id="dl_cbc7a9f1c74c409782bb";
export const url=new URL("../icons/N/nfc_off.svg?v=d9ae397a02abee982b20010bb3c3e4da38bbca2a0ad64d542b13a339a814ab32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
