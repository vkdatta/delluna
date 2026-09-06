export const name="lucid_1-check";
export const id="dl_19037d8510ca4be0a45a";
export const url=new URL("../icons/lucid_1-check.svg?v=b29819be3eaf3fbffbdc78c2617b1c727efce114cb92ecc697958414f53ef923",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
