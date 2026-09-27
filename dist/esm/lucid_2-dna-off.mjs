export const name="lucid_2-dna-off";
export const id="dl_290764e298894a0a8ce3";
export const url=new URL("../icons/lucid_2-dna-off.svg?v=2bb4aba22c154e70eb917bfc827d6c5e99add3621322ae366ead8e02a58478b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
