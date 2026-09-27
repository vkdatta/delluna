export const name="closed_caption_add";
export const id="dl_8ea6ceb554621c6ea406";
export const url=new URL("../icons/closed_caption_add.svg?v=404471f41a10562b9052782660fc0ff232a3074ac28051241a5bfce4f89da867",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
