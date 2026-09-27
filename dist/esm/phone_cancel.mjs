export const name="phone_cancel";
export const id="dl_77348f068a58b9b855b9";
export const url=new URL("../icons/phone_cancel.svg?v=523cf5edd470c3a8b5db64576412f63047b6f25a5a6533e80d02d7a931998039",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
