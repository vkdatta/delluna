export const name="flash_off-fill";
export const id="dl_f7f82d669eff400e9d43";
export const url=new URL("../icons/flash_off-fill.svg?v=e8d8d87ffdfa83d60c02a41025be351e399c23524eff35554009c4e9e1b3b522",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
