export const name="lucid_3-square-asterisk";
export const id="dl_8a9b3816483c4ae2985b";
export const url=new URL("../icons/lucid_3-square-asterisk.svg?v=07595ed4ca57a921ea96070606062b98cca743823827c4d2cc684f9dbe25e087",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
