export const name="bring_your_own_ip";
export const id="dl_46766c260634a4b0e797";
export const url=new URL("../icons/bring_your_own_ip.svg?v=49743847805778d54479498ed30ff3fb3c699a7c8ae660b00cd62d642fe0e907",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
