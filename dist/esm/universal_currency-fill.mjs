export const name="universal_currency-fill";
export const id="dl_0e700a683b734e379b3b";
export const url=new URL("../icons/U/universal_currency-fill.svg?v=57985e94b7fb1cbf481aafe319b35e369aac8fa6e4a4278f9eddca32cf9eb261",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
