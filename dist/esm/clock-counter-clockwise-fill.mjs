export const name="clock-counter-clockwise-fill";
export const id="dl_ef8977602d9144cc8d2e";
export const url=new URL("../icons/clock-counter-clockwise-fill.svg?v=618d6c238df479c26b40aab3271602a801797338d5521a28a1b254a86edf5398",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
