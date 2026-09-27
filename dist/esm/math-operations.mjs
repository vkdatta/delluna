export const name="math-operations";
export const id="dl_1aab9890953b49578748";
export const url=new URL("../icons/math-operations.svg?v=bf03f5252d1121aa100c29d3f0e47b7d66b7485848fb54f468e31689e22e4a62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
