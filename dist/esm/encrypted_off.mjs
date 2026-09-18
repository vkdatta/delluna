export const name="encrypted_off";
export const id="dl_b9dcbcc960de4fa0a535";
export const url=new URL("../icons/encrypted_off.svg?v=96fe52050c06f7830a0a11a6c4a38c702ec7e8f1026eb440b4642f0442fa8fcd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
