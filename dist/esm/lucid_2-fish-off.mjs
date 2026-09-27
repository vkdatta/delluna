export const name="lucid_2-fish-off";
export const id="dl_cffa62915b7541d59dcd";
export const url=new URL("../icons/lucid_2-fish-off.svg?v=db0f42b66f934c1354cdf4302b5f6422c971249603023bf37f4a4f2f66658054",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
