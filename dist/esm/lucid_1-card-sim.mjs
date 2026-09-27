export const name="lucid_1-card-sim";
export const id="dl_97e83d2f4e424120bdc8";
export const url=new URL("../icons/lucid_1-card-sim.svg?v=7c5fc137021457be36682594e45af95caedb04a17c53db5e05a5ce303c4cdf27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
