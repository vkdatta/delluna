export const name="screenshot_keyboard";
export const id="dl_05762fdf21e24af2882e";
export const url=new URL("../icons/screenshot_keyboard.svg?v=b0be1a197f2350b7814c573afe463ca2f67801a715b610a2343ef569729cf98c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
