export const name="lucid_2-file-music";
export const id="dl_f98d265c85da4c868a53";
export const url=new URL("../icons/lucid_2-file-music.svg?v=70cfeb4f98cb04aca9965852af6ed2db46f4d5c6f58b714ed9dda7d199645ba9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
