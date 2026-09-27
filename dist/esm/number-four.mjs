export const name="number-four";
export const id="dl_8cab4af82ca4480fbff8";
export const url=new URL("../icons/number-four.svg?v=ba581339cdb1ac3c426dcef1a6df3cb6f878d360735682d25e1fce35991a1c9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
