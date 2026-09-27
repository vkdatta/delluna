export const name="dishwasher";
export const id="dl_dc184cb5233e4511d7cd";
export const url=new URL("../icons/dishwasher.svg?v=c30323d650f3d7feb678b953494d38ddaf42aaaf10ce09eebfac30c82f0863cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
