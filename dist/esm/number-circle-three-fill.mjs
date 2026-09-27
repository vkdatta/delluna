export const name="number-circle-three-fill";
export const id="dl_65cce9bfcfdb41638f6b";
export const url=new URL("../icons/number-circle-three-fill.svg?v=ed1ae47b07f3ca8b8cb1dccac1eefd082daed55494c46b69c213f01743dcd43a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
