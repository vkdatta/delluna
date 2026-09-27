export const name="invert_colors-fill";
export const id="dl_51531772d38d280c6d7c";
export const url=new URL("../icons/invert_colors-fill.svg?v=9ff7094226e8ddb8415674bc7f0d1842f4ee00da6b1a9eb3e7f0857c7a07b7dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
