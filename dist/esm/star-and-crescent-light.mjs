export const name="star-and-crescent-light";
export const id="dl_d6002b3e278733368259";
export const url=new URL("../icons/star-and-crescent-light.svg?v=51314bec2204706e4cc0494f4254980e461501ef7eef35d0065257fbebcb8ba1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
