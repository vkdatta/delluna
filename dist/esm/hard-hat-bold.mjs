export const name="hard-hat-bold";
export const id="dl_caf0746868ea400dadfc";
export const url=new URL("../icons/hard-hat-bold.svg?v=a3282e4fa6e56b35dc4f7707cdef0648c78d6ef0e747bca6bfe712cc470ae446",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
