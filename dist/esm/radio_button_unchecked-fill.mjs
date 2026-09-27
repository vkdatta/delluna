export const name="radio_button_unchecked-fill";
export const id="dl_2fbc7c244ebfc7070014";
export const url=new URL("../icons/radio_button_unchecked-fill.svg?v=f3722d25b6c8765ef91e9f0826be13ac3099397860f77ea3ccfcc254761bc919",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
