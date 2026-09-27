export const name="brandy-bold";
export const id="dl_53b98cb1d1894c12bf67";
export const url=new URL("../icons/brandy-bold.svg?v=b88cdfae860e2782fc0fc857b6e4587f7aa3d900770986c637301c7c52d4c5e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
