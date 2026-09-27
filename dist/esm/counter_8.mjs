export const name="counter_8";
export const id="dl_d753498a5f2079854acd";
export const url=new URL("../icons/counter_8.svg?v=44e6e0c484ea43fc44f913e5d27d5fe0c83fab298d00b8bc4b70edeedba20071",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
