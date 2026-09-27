export const name="lucid_1-bolt";
export const id="dl_f15639b084e5436eb078";
export const url=new URL("../icons/lucid_1-bolt.svg?v=c94c1efe79570dfeb376774b3cc46c2a16ceeebc97ae2ecf181ce808934171ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
