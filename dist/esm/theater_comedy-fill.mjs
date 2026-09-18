export const name="theater_comedy-fill";
export const id="dl_7417d8cd03b04024a79b";
export const url=new URL("../icons/theater_comedy-fill.svg?v=2e6cb86935c75bdd92063559aa50c36591c8e340474c634147b0abf0e221bc48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
