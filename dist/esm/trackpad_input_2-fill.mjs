export const name="trackpad_input_2-fill";
export const id="dl_dd2123ccd58bcb08ee9c";
export const url=new URL("../icons/trackpad_input_2-fill.svg?v=6771d3b988513db9f6ad195958d28e0e7730845d5313d071af593af3504c7649",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
