export const name="battery_alert";
export const id="dl_927986a0bd55417db7ad";
export const url=new URL("../icons/battery_alert.svg?v=7fd26e26bbdf5e32ea6a77df96ed526f8d6a2c97fa7fb837c515d0065009e111",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
