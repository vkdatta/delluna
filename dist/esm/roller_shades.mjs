export const name="roller_shades";
export const id="dl_6e71fe653a954d8ec073";
export const url=new URL("../icons/roller_shades.svg?v=f9306bf6deede3330634585da14d178c23cf113b475163c7dc5a4ed1592e29d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
