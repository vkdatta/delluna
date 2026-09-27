export const name="format_color_reset";
export const id="dl_7668a576e7064ee2daea";
export const url=new URL("../icons/format_color_reset.svg?v=992e44800534fcef085038ce458adaf23e6dc1475fb05df634f5d61081ece06b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
