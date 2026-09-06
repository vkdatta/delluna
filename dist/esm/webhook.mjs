export const name="webhook";
export const id="dl_c4f44283239a46559fb4";
export const url=new URL("../icons/webhook.svg?v=5bdc35f937f92e719da027a0c7bb7aeef8514596e00a14ff425efb13a2fc6df6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
