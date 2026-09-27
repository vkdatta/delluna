export const name="skillet_cooktop-fill";
export const id="dl_fe7441e4a1b02156c988";
export const url=new URL("../icons/skillet_cooktop-fill.svg?v=18d631286552c71b2bde3d7d1585e8d5f8726a1afadd81c2111bdf9be51bbc15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
