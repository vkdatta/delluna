export const name="dinner_dining";
export const id="dl_0e8634ce6691945c9b0f";
export const url=new URL("../icons/dinner_dining.svg?v=93c13b8a33478be3a45260fe800990ededefa068d275f106e855417421579038",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
