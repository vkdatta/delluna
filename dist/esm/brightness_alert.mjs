export const name="brightness_alert";
export const id="dl_5e5560475d7c47249d8a";
export const url=new URL("../icons/B/brightness_alert.svg?v=e6eebd41fd5c5db26d2804a1d1d5addb60f255c85d83eaa54cdd37e3519c9faa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
