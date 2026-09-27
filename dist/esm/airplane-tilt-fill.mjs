export const name="airplane-tilt-fill";
export const id="dl_b331ae7a35504804b89a";
export const url=new URL("../icons/airplane-tilt-fill.svg?v=dc95139fc69893267a51b7945b11bbc5a8c81cc725250b515e9cc605c03972db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
