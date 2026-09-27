export const name="menstrual_health";
export const id="dl_01874d007ddf9d7a7d46";
export const url=new URL("../icons/menstrual_health.svg?v=02b08f846e82890071073ca4a8f8b263e49fa37ccd1cacadb27468160f2494e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
