export const name="carrot";
export const id="dl_d8606e65e060401ebcdd";
export const url=new URL("../icons/carrot.svg?v=627c6097937c172b2c240bbcbad9cc28f8446bbf696a8ff49b792e874dec2bb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
