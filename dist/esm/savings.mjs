export const name="savings";
export const id="dl_c403c44a7fa160205200";
export const url=new URL("../icons/savings.svg?v=7ab4f15fb901b7153d2a6c8bc57b9651811ba04d66895a2af10c56042a866601",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
