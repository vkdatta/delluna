export const name="domino_mask";
export const id="dl_63f589958af0672fee52";
export const url=new URL("../icons/domino_mask.svg?v=c296db99ee11aea5b7bf98ad4ff956a15f9fc62df8db7b0d0a1c77d57fef6151",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
