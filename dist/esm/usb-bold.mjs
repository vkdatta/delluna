export const name="usb-bold";
export const id="dl_b97d40dcf50a48caa06c";
export const url=new URL("../icons/U/usb-bold.svg?v=515ab30960e6120b2597d4fb68c6d208d3704a6b3109b076369ac98e4160806d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
