export const name="laptop_mac";
export const id="dl_0fd030543fd89d4ae1e1";
export const url=new URL("../icons/laptop_mac.svg?v=ad27255cb664b2b6d59ae9e29da1bfa7714daca77002e1e7ead6a8f8df20de22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
