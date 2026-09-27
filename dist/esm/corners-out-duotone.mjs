export const name="corners-out-duotone";
export const id="dl_7598165087f24cc79bd6";
export const url=new URL("../icons/corners-out-duotone.svg?v=9f6663e2c6ae8c73da769f510bee9fd1928dc04c5ea632de10ff90591933481c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
