export const name="lucid_2-flag-off";
export const id="dl_d67304b8b2054e4fa944";
export const url=new URL("../icons/lucid_2-flag-off.svg?v=a78854bbe0523980f2399fed4fd601f91ced383466990e476fcf50f8665ab576",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
