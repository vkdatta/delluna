export const name="shield_locked";
export const id="dl_4977e76957c6216cd72a";
export const url=new URL("../icons/shield_locked.svg?v=bdaef81a310c6be0eb7ed94f248929c971111407585cbb54fbec473a39bd239c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
