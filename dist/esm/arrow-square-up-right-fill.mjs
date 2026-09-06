export const name="arrow-square-up-right-fill";
export const id="dl_beb9b39691474a7bb81e";
export const url=new URL("../icons/arrow-square-up-right-fill.svg?v=0983862e1f88e91b716daecf874ad7fb295d349c83a3ec0984872e9a2baa6e68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
