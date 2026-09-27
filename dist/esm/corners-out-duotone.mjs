export const name="corners-out-duotone";
export const id="dl_7598165087f24cc79bd6";
export const url=new URL("../icons/corners-out-duotone.svg?v=927bfbdfeb9bd8692681a05af1e6067a32353075c861034372023a4505ac3f75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
