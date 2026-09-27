export const name="lucid_1-circle-off";
export const id="dl_1908406c18dd488686ec";
export const url=new URL("../icons/lucid_1-circle-off.svg?v=9966073d1bb1c44a2673e7cf79d2555a8d6a93b7ded09f31dce9a920ceb83939",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
