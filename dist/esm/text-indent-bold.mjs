export const name="text-indent-bold";
export const id="dl_0c6622d2c204f76a97f0";
export const url=new URL("../icons/text-indent-bold.svg?v=907166ca1761daf5a88751dabd898a5211d93409d977a85682fb720f961b98bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
