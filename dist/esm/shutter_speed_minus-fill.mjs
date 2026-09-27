export const name="shutter_speed_minus-fill";
export const id="dl_13434e2354743f116492";
export const url=new URL("../icons/shutter_speed_minus-fill.svg?v=2527c821523cef524e165b33c2cdbbc1d7c058fe13d6435334c804e51ff34990",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
