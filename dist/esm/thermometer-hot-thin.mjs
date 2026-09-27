export const name="thermometer-hot-thin";
export const id="dl_34a3918d757d7b7dff85";
export const url=new URL("../icons/thermometer-hot-thin.svg?v=b9e19b7ce7f810e5005238973aa9bb2c2d0aedfff0567ecfad63237a5a80149d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
