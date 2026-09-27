export const name="account_circle";
export const id="dl_2698c327199616a36716";
export const url=new URL("../icons/account_circle.svg?v=8432750700132e59120ad011376ac7a3b39679eedea4635d60f357575456511f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
