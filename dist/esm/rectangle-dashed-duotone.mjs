export const name="rectangle-dashed-duotone";
export const id="dl_2159f27c6a4c499e976b";
export const url=new URL("../icons/rectangle-dashed-duotone.svg?v=2961d30abbcae10f69adcf435bb21c0eb0b309cf8cc6657d05e67ab4eefbd85c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
