export const name="bluetooth-duotone";
export const id="dl_c69d296737be40ef8d05";
export const url=new URL("../icons/bluetooth-duotone.svg?v=fec541dcb88844f459151ccfabefe720eae4687d3e1d8e61436b9db3193f51b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
