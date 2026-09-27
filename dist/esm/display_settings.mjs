export const name="display_settings";
export const id="dl_ff71f72b89002cd66d2b";
export const url=new URL("../icons/display_settings.svg?v=8613c45f2f54818612e9fe5272c66f1c174d8082e4618b9bcf3edf44d9571935",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
