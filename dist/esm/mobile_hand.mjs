export const name="mobile_hand";
export const id="dl_4b0189a048d34fab9c68";
export const url=new URL("../icons/M/mobile_hand.svg?v=d5e399ca84bc7725ba05776674d6fc550189f52165b1d33aaa48f4d243d0ca07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
