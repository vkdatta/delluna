export const name="coin-vertical-bold";
export const id="dl_45b600fff3264eb9b02e";
export const url=new URL("../icons/coin-vertical-bold.svg?v=faa9b0c9fc9ce75ec79466064424720698a63a963b4b581fbfd4130012484c69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
