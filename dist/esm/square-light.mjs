export const name="square-light";
export const id="dl_7c36294a931a4f80b5c0";
export const url=new URL("../icons/S/square-light.svg?v=9162e0c03d4ca397fc78906d45e217772a798413872dd87d0421db549f096412",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
