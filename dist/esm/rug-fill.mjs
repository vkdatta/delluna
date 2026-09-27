export const name="rug-fill";
export const id="dl_73f274ac614349698988";
export const url=new URL("../icons/rug-fill.svg?v=2ad63d21f4ea086fbedc35715de63dc3acbeac530786aeb822f11aa3e9741e44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
