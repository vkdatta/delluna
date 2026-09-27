export const name="local_activity";
export const id="dl_0c4032d7a0055bf4442c";
export const url=new URL("../icons/local_activity.svg?v=58a3c4892ea85ba22c15d5c95c7621429ace9ae850626fd5adc3c46dd705d014",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
