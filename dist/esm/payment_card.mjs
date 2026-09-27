export const name="payment_card";
export const id="dl_fc608e14a7a21e71b256";
export const url=new URL("../icons/payment_card.svg?v=56e282d0607315957e75af084d36a64b10cd2bb11c7c089171c30fd47367b9d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
