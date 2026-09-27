export const name="brightness_4-fill";
export const id="dl_d8e308562aff0eedcde6";
export const url=new URL("../icons/brightness_4-fill.svg?v=02b0f9001be62829deca28ce9647ba48874238549f532d09394cd0ae9557ef71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
