export const name="text_increase-fill";
export const id="dl_48c4bf1350d791d52cf7";
export const url=new URL("../icons/text_increase-fill.svg?v=802d43957878a57536abb5f782b8dcfd606affdf608fb1a8a1e43c07150e583d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
