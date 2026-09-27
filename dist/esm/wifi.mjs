export const name="wifi";
export const id="dl_caffdfa6845244e6b086";
export const url=new URL("../icons/wifi.svg?v=01833704be5aafd162486a0ac070cd823c574d7fe9e896637dd70a5e30865995",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
