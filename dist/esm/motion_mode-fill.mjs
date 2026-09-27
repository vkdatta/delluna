export const name="motion_mode-fill";
export const id="dl_53fb8af58fdfa42f4cd3";
export const url=new URL("../icons/motion_mode-fill.svg?v=18d831f017096ec7ed328bc52b07f29e8fd0848bab35811182870365c065188d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
