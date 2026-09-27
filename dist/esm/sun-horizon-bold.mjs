export const name="sun-horizon-bold";
export const id="dl_162f316b242ce56a66ca";
export const url=new URL("../icons/sun-horizon-bold.svg?v=0668bb0b62f2ac5fa18e6208588425179323467e682c99a3c57b398bc2ca6863",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
