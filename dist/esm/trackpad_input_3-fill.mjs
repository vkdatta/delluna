export const name="trackpad_input_3-fill";
export const id="dl_b97ecd7c37501b1b79c5";
export const url=new URL("../icons/trackpad_input_3-fill.svg?v=8a986b270db71543a221d70be97b65da3639f4ecc73fffe49c1bd8b41d84a1a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
