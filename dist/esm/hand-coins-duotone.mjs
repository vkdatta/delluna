export const name="hand-coins-duotone";
export const id="dl_28af178fc76249ba989f";
export const url=new URL("../icons/hand-coins-duotone.svg?v=42c19836fc1baf840e01b4555d53888f33acf6c17989124311798568579a1839",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
