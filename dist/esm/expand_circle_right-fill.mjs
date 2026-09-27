export const name="expand_circle_right-fill";
export const id="dl_54c1f36dfdc2f62919e3";
export const url=new URL("../icons/expand_circle_right-fill.svg?v=dacefd2b00f477c79adca5b40ccc32665442f14575f7cf95eab1ac9f95a1edfd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
