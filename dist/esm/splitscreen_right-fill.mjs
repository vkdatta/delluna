export const name="splitscreen_right-fill";
export const id="dl_75b892b1b4031896a745";
export const url=new URL("../icons/splitscreen_right-fill.svg?v=85a783113ad34caef3f2f33528167584bb9cb4210fb64e5f2c39bb88ea8951dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
