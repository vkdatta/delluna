export const name="diamond_shine";
export const id="dl_34d5ecf454c985c9b0aa";
export const url=new URL("../icons/diamond_shine.svg?v=85d08b081811b73cda5af9992eaab19c7b211ed1881bd849a1c7061da2981e55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
