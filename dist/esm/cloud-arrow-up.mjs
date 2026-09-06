export const name="cloud-arrow-up";
export const id="dl_e18cb489ea374e97ba4c";
export const url=new URL("../icons/cloud-arrow-up.svg?v=607be53bf33acbd72f0e3f964ff3ef45bdc46c9e069162fdc1c9140594feab76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
