export const name="lucid_1-cloud-alert";
export const id="dl_c11b1d4bf5cb497da3ff";
export const url=new URL("../icons/lucid_1-cloud-alert.svg?v=d8aedd4c60a37a51fd8306968a7d59d40e670b726c833e1fbef66fdac765ff67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
