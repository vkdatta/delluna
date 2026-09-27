export const name="calculator";
export const id="dl_8af598981a01420ab06e";
export const url=new URL("../icons/calculator.svg?v=7593a122492d54ee223a3bbc3d4abd0d2cf456862bbc4775a85527edaf53c88d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
