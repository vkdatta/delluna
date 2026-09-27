export const name="boat_railway";
export const id="dl_5899678dca8e4eca17de";
export const url=new URL("../icons/boat_railway.svg?v=8a4addf002d620233e5cd29372731d503ed2e899533502857f99df7783301249",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
