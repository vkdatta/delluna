export const name="battery_horiz_050-fill";
export const id="dl_af4cf838ac3d59159fde";
export const url=new URL("../icons/battery_horiz_050-fill.svg?v=4d4cd122375d55746e158ddea2b08a7a55b58544cc3076282369f31809c3d7d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
