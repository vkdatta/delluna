export const name="square_circle";
export const id="dl_68351429bece28b7ce35";
export const url=new URL("../icons/square_circle.svg?v=ec5f5660d38766af2592754175e29c74ea9f762885f186e84797865fb6aa2a40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
