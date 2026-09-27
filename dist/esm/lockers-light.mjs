export const name="lockers-light";
export const id="dl_6e45d3c72d70494e8b49";
export const url=new URL("../icons/lockers-light.svg?v=da039ccd9e541f4264857a2594bdb21a849c776837549cf1a51458d67a3de56c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
