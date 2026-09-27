export const name="invert_colors_off-fill";
export const id="dl_ce4e0dfd701ce2f79ed8";
export const url=new URL("../icons/invert_colors_off-fill.svg?v=efc40d1530f33e24de1aae30c69f979437c6ec1bc7e4f1c73aab4a4b0717a456",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
