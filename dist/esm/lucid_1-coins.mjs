export const name="lucid_1-coins";
export const id="dl_f4e0a4768a1642a2a92e";
export const url=new URL("../icons/lucid_1-coins.svg?v=40bfe4186b465cf747344451e021e25ed69055f325d0af8d638ed7f7bbffde86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
